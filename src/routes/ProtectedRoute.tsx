import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

interface Props {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
  if (!isAuthenticated()) return <Navigate to="/login" replace />;
  return <>{children}</>;
};
