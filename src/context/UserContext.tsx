"use client";

import { UserData } from "@/types/user";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type UserContextType = {
  userName: string;
  linkedInAccount: string;
  score: number;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
  setUserName: (name: string) => void;
  setScore: (score: number) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  login: () => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState("");
  const [linkedInAccount, setLinkedInAccount] = useState("");
  const [score, setScore] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data: UserData = await response.json();
        setUserName(data.userName);
        setLinkedInAccount(data.linkedInAccount);
        const maxScore = parseInt(localStorage.getItem("maxScore") || "0", 10);
        if (maxScore) {
          setScore(maxScore);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred when fetching the user data");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const login = async () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUserName("");
    setLinkedInAccount("");
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{
        userName,
        linkedInAccount,
        score,
        isLoggedIn,
        loading,
        error,
        setUserName,
        setScore,
        setLoading,
        setError,
        setIsLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
