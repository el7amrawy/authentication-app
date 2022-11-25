import { useState } from "react";
import Personal_info from "../components/user/Personal_info";
import Edit_info from "../components/user/Edit_info";

const User = ({ user, token, setUserData }) => {
  const [edit, setEdit] = useState(false);
  return (
    <main className=" w-4/5 mx-auto font-sans text-black flex justify-center">
      {edit ? (
        <Edit_info
          user={user}
          token={token}
          setEdit={setEdit}
          setUserData={setUserData}
        />
      ) : (
        <Personal_info user={user} setEdit={setEdit} />
      )}
    </main>
  );
};

export default User;
