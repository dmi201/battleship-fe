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
  setUserName: (name: string) => void;
  incrementScore: () => void;
  setLoading: (loading: boolean) => void;
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

  const incrementScore = () => setScore((prevScore) => prevScore + 1);

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
      } catch (err) {
        setError(err.message);
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
        setUserName,
        incrementScore,
        setLoading,
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
