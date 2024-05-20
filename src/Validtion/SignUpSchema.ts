import { z } from "zod";

const signUpSchema = z
  .object({
    firstName: z.string().min(1, { message: "FirstName is Required" }),
    lastName: z.string().min(1, { message: "LastName is Required" }),
    email: z.string().min(1, { message: "email is Required" }).email(),
    password: z
      .string()
      .min(8, { message: "Password Must be 8 Charaters Atlest" })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),
    confirmPassword: z.string().min(1, { message: "ConfirmPassword Required" }),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "ConfirmPassword Must Match Password",
  });

type TFormSignUp = z.infer<typeof signUpSchema>;

export { signUpSchema , type TFormSignUp}