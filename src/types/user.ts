export type UserContextType = {
  userName: string;
  linkedInAccount: string;
  score: number;
  isLoggedIn: boolean;
  setUserName: (name: string) => void;
  setScore: () => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export type UserData = {
  userName: string;
  linkedInAccount: string;
};
