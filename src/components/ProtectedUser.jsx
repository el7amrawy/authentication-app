import { Navigate, useParams } from "react-router-dom";

const ProtectedUser = ({ children, userData }) => {
  const { user_id } = useParams();

  if (userData.token.length && userData.user?.id == user_id) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedUser;
