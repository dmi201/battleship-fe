import React, { createContext, useState, ReactNode } from "react";

type UserContextType = {
  userName: string;
  score: number;
  isLoggedIn: boolean;
  loading: boolean;
  setUserName: (name: string) => void;
  incrementScore: () => void;
  setLoading: (loading: boolean) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleSetUserName = (name: string) => setUserName(name);
  const incrementScore = () => setScore((prevScore) => prevScore + 1);

  return (
    <UserContext.Provider
      value={{
        userName,
        score,
        isLoggedIn,
        loading,
        setUserName: handleSetUserName,
        incrementScore,
        setLoading,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
