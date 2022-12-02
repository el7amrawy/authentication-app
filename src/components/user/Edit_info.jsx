import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faCamera } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";

const Edit_info = ({ user, setEdit, token, setUserData }) => {
  /* ------------------ States ------------------ */
  const [editData, setEditData] = useState({ ...user });
  const [image, setImage] = useState(null);

  /* ------------------ Effects ------------------ */
  useEffect(() => {
    if (image) {
      axios
        .post(config.apiHost + "/upload", image, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          setEditData({ ...editData, img: data.img });
          console.log(editData);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [image]);

  /* ------------------ Handlers ------------------ */
  function changeHandler(ev) {
    const image = ev.target.files[0];
    if (image) {
      const formData = new FormData();
      formData.append(image.name, image);
      setImage(formData);
    }
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post(
        config.apiHost + `/users/${user.id}`,
        { user: editData },
        { headers: { Authorization: `auth ${token}` } }
      );
      // console.log(data);
      setUserData((oldData) => ({ ...oldData, user: data }));
      // window.location.reload();
      setEdit(false);
    } catch (err) {
      console.error(err);
      alert(err.response.data);
    }
  }

  return (
    <section>
      <div
        className=" text-[#2D9CDB] font-sans text-lg font-normal capitalize cursor-pointer"
        onClick={() => setEdit(false)}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
        <span className=" inline-block ml-3">Back</span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="sm:border rounded-xl sm:shadow border-[#E0E0E0] sm:my-11 lg:min-w-[845px] sm:px-12"
      >
        <div className=" pt-7 flex justify-between items-center">
          <div className=" mr-10">
            <h3 className=" text-2xl">Change Info</h3>
            <h5 className=" text-[#828282] mt-1 text-sm font-medium">
              Changes will be reflected to every services
            </h5>
          </div>
        </div>
        <div className="py-6 flex items-center justify-start">
          <label
            htmlFor="img-file"
            style={{
              backgroundImage: `url(${
                editData.img ||
                "https://www.ism.lu.se/themes/custom/lu_theme/images/default_images/usericon.png"
              })`,
            }}
            className="rounded-lg overflow-hidden w-[72px] h-[72px] flex justify-center items-center cursor-pointer bg-cover"
          >
            <FontAwesomeIcon icon={faCamera} className=" text-white text-xl" />
            <input
              type="file"
              accept="image/png, image/jpg, image/gif, image/jpeg"
              className="hidden"
              id="img-file"
              onChange={changeHandler}
            />
          </label>
          <div className="text-[#828282] capitalize text-sm leading-5 font-medium overflow-hidden ml-7">
            CHANGE PHOTO
          </div>
        </div>
        <div className="py-7">
          <div className="text-[#4F4F4F] capitalize text-sm leading-5 font-medium overflow-hidden">
            Name
          </div>
          <input
            className=" mt-1 w-full sm:w-[416px] p-4 rounded-xl border border-[#828282] focus:outline-blue-500 placeholder:text-[#BDBDBD] placeholder:font-medium placeholder:text-sm"
            placeholder={editData.name || "Enter your name..."}
            value={editData.name || ""}
            onChange={(ev) =>
              setEditData({ ...editData, name: ev.target.value })
            }
          />
        </div>
        <div className="py-7">
          <div className="text-[#4F4F4F] capitalize text-sm leading-5 font-medium overflow-hidden">
            Bio
          </div>
          <textarea
            className=" mt-1 w-full h-24 sm:w-[416px] p-4 rounded-xl border border-[#828282] focus:outline-blue-500 placeholder:text-[#BDBDBD] placeholder:font-medium placeholder:text-sm"
            placeholder={editData.bio || "Enter your bio..."}
            value={editData.bio || ""}
            onChange={(ev) =>
              setEditData({ ...editData, bio: ev.target.value })
            }
          />
        </div>
        <div className="py-7">
          <div className="text-[#4F4F4F] capitalize text-sm leading-5 font-medium overflow-hidden">
            Phone
          </div>
          <input
            className=" mt-1 w-full sm:w-[416px] p-4 rounded-xl border border-[#828282] focus:outline-blue-500 placeholder:text-[#BDBDBD] placeholder:font-medium placeholder:text-sm"
            placeholder={"Enter your phone number..."}
            value={editData.phone || ""}
            onChange={(ev) =>
              setEditData({ ...editData, phone: ev.target.value })
            }
          />
        </div>
        <div className="py-7">
          <div className="text-[#4F4F4F] capitalize text-sm leading-5 font-medium overflow-hidden">
            email
          </div>
          <input
            className=" mt-1 w-full sm:w-[416px] p-4 rounded-xl border border-[#828282] focus:outline-blue-500 placeholder:text-[#BDBDBD] placeholder:font-medium placeholder:text-sm"
            placeholder={"Enter your email..."}
            value={editData.email || ""}
            onChange={(ev) =>
              setEditData({ ...editData, email: ev.target.value })
            }
          />
        </div>
        <button className="my-6 cursor-pointer py-2 px-6 text-center capitalize text-white font-semibold bg-blue-500 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Save
        </button>
      </form>
    </section>
  );
};

export default Edit_info;
