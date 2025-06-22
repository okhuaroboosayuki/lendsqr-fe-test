import { createContext, useState } from "react";
import { supabase } from "../services/supabaseClient";
import type { AuthContextType, AuthProviderProps } from "../types/types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<object | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);

  // useEffect(() => {
  //   supabase.auth.getSession().then(async ({ data: { session } }) => {
  //     setSession(session);
  //     if (session) {
  //       console.log(session);

  //       setId(session.user.id);
  //       // check if user exists in the database
  //       const { data, error } = await supabase.from("Users").select("*").eq("user_id", session.user.id).single();
  //       if (error) console.error("Error fetching user data:", error.message);
  //       // if user exists, do nothing
  //       if (data) return;
  //       // if user does not exist, insert into the database
  //     } else {
  //       setId(null);
  //     }
  //   });
  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //     if (session) {
  //       setId(session.user.id);
  //     } else {
  //       setId(null);
  //     }
  //   });
  //   return () => subscription.unsubscribe();
  // }, []);

  const signIn = async (email: string, password: string) => {
    setAuthError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log(data);
    console.log(error?.message);

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
    setSession(null);
    setId(null);
  };

  return <AuthContext.Provider value={{ session, authError, id, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

// const fetchData = async () => {
//       const res = await fetch("https://api.json-generator.com/templates/8q-VHTkZpYyY/data", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer kjd1q166hihdtgpmri2kwayw51xacnsh2cgud310",
//         },
//       });
//       const data = await res.json();
//       console.log(data[0]);
//     };
