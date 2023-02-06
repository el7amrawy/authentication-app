import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faSquareFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import config from "../config";
import { useNavigate } from "react-router-dom";

const Social = ({ setUserData }) => {
  const navigate = useNavigate();

  const fbAuth = () => {
    window.FB.login(
      (res) => {
        if (res.status === "connected") {
          const fbToken = res.authResponse?.accessToken;
          window.FB.api(
            "/me",
            { fields: "first_name,last_name,email", access_token: fbToken },
            async (res) => {
              // console.log(res);
              const { email, first_name, last_name } = res;
              try {
                const resp = await axios.post(
                  config.apiHost + "/users/get_id",
                  {
                    email,
                  }
                );
                const { id } = resp.data;
                try {
                  const res = await axios.post(config.apiHost + "/users/auth", {
                    id,
                    // password: fbToken,
                  });
                  console.log(res, id);
                  setUserData(res.data);
                  navigate(`/user/${res.user.id}`);
                } catch (err) {
                  console.error(err);
                }
              } catch (err) {
                const res = await axios.post(config.apiHost + "/users", {
                  email,
                  //   password: fbToken,
                });
                setUserData(res.data);
                const { data } = await axios.post(
                  config.apiHost + `/users/${res.data.user.id}`,
                  {
                    user: {
                      ...res.data.user,
                      name: first_name + " " + last_name,
                    },
                  },
                  { headers: { Authorization: `auth ${res.data.token}` } }
                );
                // console.log(data);
                setUserData((oldData) => ({ ...oldData, user: data }));
                navigate(`/user/${data.id}`);
              }
            }
          );
        }
      },
      {
        scope: "public_profile,email",
        // return_scopes: true,
      }
    );
  };
  return (
    <>
      <div className=" text-sm text-gray-400  mt-8 text-center">
        or continue with these social profile
      </div>
      <div className="flex justify-center mt-6">
        <div className=" border border-[#828282] rounded-full p-3 mx-2 flex justify-center cursor-pointer">
          <FontAwesomeIcon icon={faGoogle} className=" text-[#828282] " />
        </div>
        <div className=" border border-[#828282] rounded-full p-3 mx-2 flex justify-center cursor-pointer">
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className=" text-[#828282] "
            onClick={fbAuth}
          />
        </div>
        <div className=" border border-[#828282] rounded-full p-3 mx-2 flex justify-center cursor-pointer">
          <FontAwesomeIcon icon={faTwitter} className=" text-[#828282] " />
        </div>
        <div className=" border border-[#828282] rounded-full p-3 mx-2 flex justify-center cursor-pointer">
          <FontAwesomeIcon icon={faGithub} className=" text-[#828282] " />
        </div>
      </div>
    </>
  );
};

export default Social;
