export type UserContextType = {
  userName: string;
  score: number;
  isLoggedIn: boolean;
  setUserName: (name: string) => void;
  incrementScore: () => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};
