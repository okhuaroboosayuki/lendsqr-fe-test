import { createContext, useState } from "react";
import { supabase } from "../services/supabaseClient";
import type { AuthContextType, AuthProviderProps } from "../types/types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<object | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);

  const signIn = async (email: string, password: string) => {
    setAuthError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setAuthError(error.message);
      console.error("Error signing in:", error.message);
      return false;
    }

    if (data.user) {
      setSession(data.session);
      setId(data.user.id);
      localStorage.setItem("isAuthenticated", "true");
      return true;
    }

    return false;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Error signing out:", error.message);

    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("users");
    setSession(null);
    setId(null);
  };

  return <AuthContext.Provider value={{ session, authError, id, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
