import { useParams } from "react-router-dom";
import Personal_info from "../components/user/Personal_info";

const User = () => {
  const { user_id } = useParams();
  return (
    <main className=" w-4/5 mx-auto font-sans text-black flex justify-center">
      <Personal_info />
    </main>
  );
};

export default User;
