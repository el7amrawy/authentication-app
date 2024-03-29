import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// logo
import logo from "../assets/icons/devchallenges.svg";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
//
import axios from "axios";
import config from "../config";
import Social from "../components/Social";

const Login = ({ setUserData }) => {
  const navigate = useNavigate();
  /* --------- States --------- */
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      if (formData.email.length && formData.password.length) {
        const res = await axios.post(config.apiHost + "/users/get_id", {
          email: formData.email,
        });
        const { id } = res.data;
        const { data } = await axios.post(config.apiHost + "/users/auth", {
          id,
          password: formData.password,
        });
        setUserData(data);
        navigate(`/user/${data.user.id}`);
      } else {
        alert("pass and mail are required");
      }
    } catch (err) {
      console.error(err);
      alert("wrong password");
    }
  };
  return (
    <main className=" sm:w-4/5 mx-auto flex justify-center flex-col items-center h-screen font-sans text-[#333333]">
      <form
        onSubmit={handleSubmit}
        className=" py-10 px-16 sm:shadow-md rounded-3xl sm:border border-[#BDBDBD] max-w-md"
      >
        <Link to="/">
          <img src={logo} alt="icon" />
        </Link>
        <div className=" mt-8 text-lg font-semibold max-w-xs">Login</div>
        <div className="mt-8 w-80">
          <div>
            <label htmlFor="inp--email" className="relative w-full">
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
          <button className="w-full mt-6 cursor-pointer py-2 text-center capitalize text-white font-semibold bg-blue-500 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            login
          </button>
        </div>
        <Social setUserData={setUserData} />
        <div className="text-sm text-gray-400  mt-7 text-center">
          Don’t have an account yet?{" "}
          <Link to="/register">
            <span className=" inline-block text-[#2D9CDB] cursor-pointer">
              Register
            </span>
          </Link>
        </div>
      </form>
      <div className=" flex justify-betweenmt-3 mt-3">
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

export default Login;
