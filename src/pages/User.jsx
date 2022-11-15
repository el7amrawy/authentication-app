import { useState } from "react";
import Personal_info from "../components/user/Personal_info";
import Edit_info from "../components/user/Edit_info";

const User = ({ user }) => {
  const [edit, setEdit] = useState(true);
  return (
    <main className=" w-4/5 mx-auto font-sans text-black flex justify-center">
      {edit ? (
        <Edit_info user={user} setEdit={setEdit} />
      ) : (
        <Personal_info user={user} setEdit={setEdit} />
      )}
    </main>
  );
};

export default User;
