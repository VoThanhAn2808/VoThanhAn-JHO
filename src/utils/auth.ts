import { USERS } from "../constants/users";

export const login = (email: string, password: string) => {
  const user = USERS.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem("isAuthenticated", "true");
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("isAuthenticated");
};

export const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};
