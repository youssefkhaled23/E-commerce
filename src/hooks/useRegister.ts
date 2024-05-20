import useCheckEmail from "@hooks/useCheckEmail";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actAuthRegister, resetUi } from "@store/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { TFormSignUp, signUpSchema } from "@Validtion/SignUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
export const useRegister = () => {
    const navigate = useNavigate();
    const dispath = useAppDispatch();
    const { loading, error ,accessToken} = useAppSelector((state) => state.auth);
    const {
      register,
      handleSubmit,
      formState: { errors },
      getFieldState,
      trigger,
    } = useForm<TFormSignUp>({
      mode: "onBlur",
      resolver: zodResolver(signUpSchema),
    });
  
    const { emailAvailble, enterdEmail, checkEmailAvalible, resetCheckEmail } =
      useCheckEmail();
  
    const submitForm: SubmitHandler<TFormSignUp> = async (data) => {
      const { firstName, lastName, email, password } = data;
      dispath(actAuthRegister({ firstName, lastName, email, password }))
        .unwrap()
        .then(() => navigate("/login?message=account_created"));
    };
  
    const onBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
      await trigger("email");
      const { isDirty, invalid } = getFieldState("email");
      const value = e.target.value;
      if (isDirty && !invalid && enterdEmail !== value) {
        // Checker
        checkEmailAvalible(value);
      }
      if (isDirty && invalid && enterdEmail) {
        resetCheckEmail();
      }
    };
  
    useEffect(() => {
      dispath(resetUi());
    }, [dispath]);
  
  return {error , accessToken , loading, register, handleSubmit , emailAvailble , submitForm , onBlurHandler , errors}
}
