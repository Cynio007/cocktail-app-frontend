import { createContext, Dispatch, SetStateAction } from "react";

interface UserContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  setIsLoggedIn(isLoggedIn: boolean): void {},
});
