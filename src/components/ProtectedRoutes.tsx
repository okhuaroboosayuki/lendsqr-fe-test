import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { AuthProviderProps } from "../types/types";

const ProtectedRoutes = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuthenticated");

  useEffect(() => {
    if (!isAuth) {
      navigate("/", { replace: true });
    }
  }, [isAuth, navigate]);

  return isAuth && children;
};

export default ProtectedRoutes;
