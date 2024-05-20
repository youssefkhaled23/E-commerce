import { z } from "zod";

const SignInSchema = z.object({
  email: z.string().min(1, { message: "email is Required" }).email(),
  password: z.string().min(8, { message: "Password is Required" }),
});

type TFormSignIn = z.infer<typeof SignInSchema>;

export { SignInSchema, type TFormSignIn };
