import { Navigate } from "react-router-dom";

const ProtectedUser = ({ children, userData }) => {
  if (userData.token.length && userData.user?.id) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedUser;
