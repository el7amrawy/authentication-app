import Personal_info from "../components/user/Personal_info";

const User = ({ user }) => {
  return (
    <main className=" w-4/5 mx-auto font-sans text-black flex justify-center">
      <Personal_info user={user} />
    </main>
  );
};

export default User;
