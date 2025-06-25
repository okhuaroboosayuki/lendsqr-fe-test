import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { FieldError, UseFormRegister } from "react-hook-form";
import { z } from "zod";

export type ErrorBoundaryProps = {
  error: Error;
};

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

export type SideNavProps = {
  isSideNavOpen: boolean;
  setIsSideNavOpen: Dispatch<SetStateAction<boolean>>;
};

export type NavListProps = {
  icon?: string;
  name?: string;
  link?: string | (() => void);
  children?: string;
};

export type WidgetProps = {
  icon: string;
  title: string;
  number: number;
  className: string;
};

export type CustomLinkProps = {
  to: string;
  children: React.ReactNode;
};

type LenderStatus = "pending" | "active" | "inactive" | "blacklisted";

type Gender = "male" | "female";

type MaritalStatus = "divorced" | "married" | "single";

type EducationLevel = "B.Sc" | "B.A" | "B.Ed" | "MBBS" | "LLB" | "M.Sc" | "Ph.D";

type EmploymentStatus = "employed" | "self-employed" | "job-seeking";

type SectorOfEmployment = "finance" | "fashion" | "technology" | "healthcare" | "education" | "agriculture" | "construction";

type Relationship = "sister" | "brother" | "nephew" | "niece" | "aunt" | "uncle" | "father" | "mother";

export type Guarantor = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  relationship: Relationship;
};

export type Profile = {
  lender: string;
  bank_name: string;
  bank_account: number;
  id: string;
  stars: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  date_joined: string;
  status: LenderStatus;
  gender: Gender;
  dob: string;
  bvn: string;
  marital_status: MaritalStatus;
  number_of_children: number;
  education_level: EducationLevel;
  employment_status: EmploymentStatus;
  sector_of_employment: SectorOfEmployment;
  duration_of_employment: number;
  employer: string;
  official_email: string;
  monthly_income: number;
  loan_repayment: number;
  savings_amount: number;
  type_of_residence: string;
  account_balance: number;
  social_handle: string;
  guarantors: Guarantor[];
};

export type User = {
  profile: Profile;
};

export type UserTableProps = {
  rows: User[];
};

export type PaginationProps = {
  currentPage: number;
  range: Array<number | "dots">;
  totalItems: number;
  totalPages: number;
  startIndex?: number;
  endIndex?: number;
  prevPage: () => void;
  nextPage: () => void;
  goToPage: (n: number) => void;
};
