import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type FormData } from "../types/types";
import logo from "/assets/logo.svg";
import pablo from "/assets/images/pablo-sign-in.png";
import FormField from "../components/FormField";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(LoginSchema) });
  const passwordValue = watch("password");

  const { signIn, authError } = useAuth();

  const onSubmit = async (data: FormData) => {
    const success = await signIn(data.email, data.password);

    if (success) navigate("/dashboard/users");
  };

  const handleVisibility = () => {
    if (!passwordValue) return;
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <>
      <title>Log In | LendSqr</title>
      <meta name="description" content="Login to LendSqr to access your account and manage users." />

      <section className="login">
        <header>
          <img src={logo} alt="LendSqr's Logo" />
        </header>

        <section className="login_form">
          <img className="pablo_sketch" src={pablo} alt="sketch" loading="lazy" />

          <div className="form_container">
            <h2>welcome!</h2>
            <p className="form_container_paragraph">Enter details to login.</p>

            {authError && <p className="auth_error">{authError}</p>}

            <form onSubmit={handleSubmit(onSubmit)}>
              <FormField type="email" register={register} name="email" placeholder="Email" error={errors.email} />

              <FormField
                type={isPasswordVisible ? "text" : "password"}
                register={register}
                name="password"
                placeholder="Password"
                error={errors.password}
                showToggle
                isVisible={isPasswordVisible}
                onToggle={handleVisibility}
                isToggleDisabled={!passwordValue}
              />

              <Link to={"#"}>Forgot PASSWORD?</Link>

              <button className="submit_btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "loading..." : "log in"}
              </button>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};

export default Login;
