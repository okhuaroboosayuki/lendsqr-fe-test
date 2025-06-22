import type { ReactNode } from "react";
import type { FieldError, UseFormRegister } from "react-hook-form";
import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must contain at least 8 characters" }),
});

export type FormData = {
  email: string;
  password: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  showToggle?: boolean;
  isVisible?: boolean;
  onToggle?: () => void;
  isToggleDisabled?: boolean;
};

type ValidFieldNames = "email" | "password";

export type AuthProviderProps = {
  children: ReactNode;
};

export type AuthContextType = {
  session: object | null;
  id: string | null;
  authError: string | null;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
};
