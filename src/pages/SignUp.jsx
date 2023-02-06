// logo
import logo from "../assets/icons/devchallenges.svg";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
//
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";
import Social from "../components/Social";

const SignUp = ({ setUserData }) => {
  const navigate = useNavigate();
  /* --------- States --------- */
  const [formData, setFormData] = useState({ email: "", password: "" });

  /* --------- handlers --------- */
  function submitHandler(ev) {
    ev.preventDefault();
    if (formData.email.length && formData.password.length) {
      axios
        .post(config.apiHost + "/users", formData)
        .then(({ data }) => {
          setUserData(data);
          navigate(`/user/${data.user.id}`);
        })
        .catch((err) => {
          if (err.response?.status == 406) {
            alert("email is already used");
          }
          console.error(err);
        });
    } else {
      alert("pass and mail are required");
    }
  }

  return (
    <main className=" sm:w-4/5 mx-auto flex justify-between mt-6 sm:mt-0 sm:justify-center flex-col items-center h-screen font-sans text-[#333333]">
      <form
        onSubmit={submitHandler}
        className=" sm:py-10 sm:px-16 sm:shadow-md rounded-3xl sm:border border-[#BDBDBD] max-w-md"
      >
        <Link to="/">
          <img src={logo} alt="icon" />
        </Link>
        <div className=" mt-8 text-lg font-semibold max-w-xs">
          Join thousands of learners from around the world
        </div>
        <div className="max-w-xs mt-4">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </div>
        <div className="mt-8">
          <div>
            <label htmlFor="inp--email" className="relative">
              <input
                id="inp--email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(ev) =>
                  setFormData((d) => ({
                    ...d,
                    email: ev.target.value,
                  }))
                }
                className="w-full py-3 pl-11 rounded-lg shadow border border-[#BDBDBD] placeholder:text-[#828282] placeholder:text-base focus:outline-blue-500"
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                className=" absolute left-[14px] top-1 w-4 text-[#828282]"
              />
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="inp--password" className="relative  mt-4">
              <input
                id="inp--password"
                value={formData.password}
                onChange={(ev) =>
                  setFormData((d) => ({
                    ...d,
                    password: ev.target.value,
                  }))
                }
                type="password"
                placeholder="Password"
                className="w-full py-3 pl-11 rounded-lg shadow border border-[#BDBDBD] placeholder:text-[#828282] placeholder:text-base focus:outline-blue-500"
              />
              <FontAwesomeIcon
                icon={faLock}
                className=" absolute left-[14px] top-1 w-4 text-[#828282]"
              />
            </label>
          </div>
          <button className="w-full mt-6 cursor-pointer capitalize py-2 text-center text-white font-semibold bg-blue-500 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Start coding now
          </button>
        </div>
        <Social setUserData={setUserData} />
        <div className="text-sm text-gray-400  mt-7 text-center">
          Adready a member?{" "}
          <Link to="/login">
            <span className=" inline-block text-[#2D9CDB] cursor-pointer">
              Login
            </span>
          </Link>
        </div>
      </form>
      <div className=" flex justify-betweenmt-3 m-3">
        <span className=" inline-block text-gray-400">
          created by{" "}
          <a
            href="https://www.linkedin.com/in/aly-hamdy/"
            target="_blank"
            className=" underline"
          >
            Aly Hamdy
          </a>
        </span>
      </div>
    </main>
  );
};

export default SignUp;
