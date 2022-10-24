import light_icon from "../assets/icons/devchallenges-light.svg";
import darck_icon from "../assets/icons/devchallenges.svg";

const Login = ({ theme }) => {
  return (
    <section className=" flex justify-center items-center w-full h-screen font-mono text-[#333333]">
      <form className=" py-10 px-16 shadow-lg rounded-3xl">
        {theme === "light" ? (
          <img src={light_icon} alt="icon" />
        ) : (
          <img src={darck_icon} alt="icon" />
        )}
        <div className=" mt-8 text-lg font-semibold max-w-xs">
          Join thousands of learners from around the world
        </div>
        <div className="max-w-xs mt-4">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </div>
      </form>
    </section>
  );
};

export default Login;
