import logo from "../assets/icons/devchallenges.svg";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className=" font-sans bg-white">
      <nav className=" w-11/12 mx-auto p-7 flex justify-between items-center">
        <div className=" rounded-lg overflow-hidden">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex">
          <img alt="avatar" src="" />
          <div className="cursor-pointer font-bold text-xs text-black">
            <span className="inline-block px-3">Marcos</span>
            <FontAwesomeIcon icon={faCaretUp} />
            <ul className=" absolute rounded-lg overflow-hidden px-4 py-4">
              <li>
                <a></a>
              </li>
              <li>
                <a></a>
              </li>
              <li>
                <a></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
