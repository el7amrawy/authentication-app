import logo from "../assets/icons/devchallenges.svg";
import {
  faCaretUp,
  faCircleUser,
  faUserGroup,
  faArrowRightFromBracket,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Header = () => {
  /* --------- States --------- */

  const [showDropList, setShowDropList] = useState(false);

  /* --------- Effects --------- */
  useEffect(() => {
    if (showDropList) {
      document.documentElement.style.overflowX = "hidden";
    }
    return () => (document.documentElement.style.overflowX = "unset");
  }, [showDropList]);

  /* --------- Refs --------- */

  const transpLayerRef = useRef(null);

  return (
    <header className=" font-sans bg-white">
      <nav className=" w-11/12 mx-auto p-7 flex justify-between items-center">
        <div className=" rounded-lg overflow-hidden">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center">
          <img alt="avatar" src="" />
          <div
            className="cursor-pointer font-bold text-xs text-black"
            onClick={() => setShowDropList(!showDropList)}
          >
            <span className="inline-block px-3">Marcos</span>
            {showDropList ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ) : (
              <FontAwesomeIcon icon={faCaretDown} />
            )}
          </div>
          {showDropList ? (
            <div
              className=" w-screen h-screen absolute top-0 left-0 bg-transparent"
              ref={transpLayerRef}
              onClick={(ev) => {
                if (ev.target === transpLayerRef.current) {
                  setShowDropList(false);
                }
              }}
            >
              <div className=" text-[#4F4F4F] text-xs font-medium absolute top-16 right-8  bg-white border shadow rounded-lg overflow-hidden px-4 py-4 w-44">
                <ul className="border-b pb-3 border-[#E0E0E0]">
                  <li className="flex items-center cursor-pointer p-3 hover:bg-[#F2F2F2] rounded-lg">
                    <FontAwesomeIcon
                      icon={faCircleUser}
                      className=" text-base"
                    />
                    <a className=" capitalize ml-4">My profile</a>
                  </li>
                  <li className="flex items-center cursor-pointer p-3 mt-2 hover:bg-[#F2F2F2] rounded-lg">
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      className=" text-base"
                    />
                    <a className=" capitalize ml-4">Group Chat</a>
                  </li>
                </ul>
                <ul className=" text-[#EB5757] ">
                  <li className="flex items-center cursor-pointer p-3 mt-2 rounded-lg hover:bg-[#F2F2F2]">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    <a className=" capitalize ml-4">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
