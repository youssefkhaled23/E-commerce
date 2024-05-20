import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actAuthLogin, resetUi } from "@store/auth/authSlice";
import { useEffect } from "react";
import { SignInSchema, TFormSignIn } from "@Validtion/SignInSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useSearchParams } from "react-router-dom";
export const useLogin = () => {
    const disapth = useAppDispatch();
    const { error, loading , accessToken } = useAppSelector(
      (state) => state.auth
    );
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<TFormSignIn>({
      mode: "onBlur",
      resolver: zodResolver(SignInSchema),
    });
  
    const submitForm: SubmitHandler<TFormSignIn> = (data) => {
      if (searchParams.get("message")) {
        setSearchParams("");
      }
      disapth(actAuthLogin(data))
        .unwrap()
        .then(() => navigate("/"));
    };
  
    useEffect(() => {
      disapth(resetUi())
    }, [disapth])
    
  
  return {error , loading, accessToken , register, handleSubmit, errors , submitForm ,searchParams }
}
