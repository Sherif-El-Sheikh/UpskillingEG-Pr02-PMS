import { Navigate } from "react-router-dom";

interface RouteGuardProps {
  isAllowed: boolean;
  redirectPath: string;
  children: React.ReactNode;
}

const RouteGuard = ({ isAllowed, redirectPath, children }: RouteGuardProps) => {
  return isAllowed ? children : <Navigate to={redirectPath} replace />;
};

export default RouteGuard;
