import { FaDog } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import TextWithIcon from "./TextWithIcon";
import { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ThemeContext } from "../contexts/theme";
import { BsFillSunFill } from "react-icons/bs";

const initialOpen = false;
const initialHideMenu = false;

const Menu = () => {
  const [open, setOpen] = useState(initialOpen);
  const [hideMenu, setHideMenu] = useState(initialHideMenu);

  const { handleDarkMode, darkMode } = useContext(ThemeContext);

  const handleChangeClose = () => {
    setOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleChangeOpen = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 100) {
        setHideMenu(true);
      } else {
        setHideMenu(false);
      }
    });

    window.addEventListener("resize", (e) => {
      if (window.innerWidth >= 1024) {
        handleChangeClose();
      }
    });

    return () => {
      window.removeEventListener("scroll", (e) => {});
      window.removeEventListener("resize", (e) => {});
    };
  }, []);

  return (
    <nav
      className={`fixed w-full h-[75px] top-0 left-0 flex items-center justify-between lg:px-10 lg:fixed lg:top-0 z-[99999] ${
        hideMenu ? "bg-white dark:bg-slate-800" : "bg-transparent"
      }`}
    >
      <div className="flex items-center min-w-max pl-5 lg:pl-0">
        <FaDog
          size={30}
          className={`${hideMenu ? "text-orange-400" : "text-white"}`}
        />
        <h2
          className={`text-white text-lg font-bold ml-2 ${
            hideMenu ? "text-black dark:text-white" : "text-white"
          }`}
        >
          Dogs Care
        </h2>
      </div>
      <div
        className={`gap-5 flex flex-col w-full h-screen fixed lg:static top-0 ${
          !open ? "translate-y-[-100%]" : "translate-y-0"
        } bg-white dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent justify-center items-center transition ease-in-out duration-500 lg:flex-row lg:static lg:h-[75px] lg:translate-y-0`}
      >
        <div className="absolute top-0 right-0 lg:hidden">
          <AiOutlineClose
            size={35}
            className="text-orange-400 m-5 cursor-pointer"
            onClick={handleChangeClose}
          />
        </div>
        <ul className="gap-10 lg:gap-3 flex flex-col w-full lg:justify-end lg:flex-row">
          <li>
            <a
              href="#"
              onClick={handleChangeClose}
              className={`text-black dark:text-white font-light ${
                hideMenu ? "lg:text-orange-400" : "lg:text-white"
              } hover:border-b-4 border-orange-400 lg:border-0 w-full`}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#aboutus"
              onClick={handleChangeClose}
              className={`text-black dark:text-white font-light lg:${
                hideMenu ? "text-orange-400" : "text-white"
              } hover:border-b-4 border-orange-400 lg:border-0 w-full`}
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={handleChangeClose}
              className={`text-black dark:text-white font-light lg:${
                hideMenu ? "text-orange-400" : "text-white"
              } hover:border-b-4 border-orange-400 lg:border-0 w-full`}
            >
              SERVICES
            </a>
          </li>
          <li>
            <a
              href="#news"
              onClick={handleChangeClose}
              className={`text-black dark:text-white font-light lg:${
                hideMenu ? "text-orange-400" : "text-white"
              } hover:border-b-4 border-orange-400 lg:border-0 w-full`}
            >
              LATEST NEWS
            </a>
          </li>
        </ul>
        <div className="items-center gap-5 lg:ml-5 flex flex-col lg:flex-row">
          <TextWithIcon />
          {darkMode ? (
            <BsFillSunFill
              size={25}
              className="cursor-pointer text-orange-400"
              onClick={handleDarkMode}
            />
          ) : (
            <MdDarkMode
              size={25}
              className="cursor-pointer text-orange-400"
              onClick={handleDarkMode}
            />
          )}
        </div>
      </div>
      <div className="flex lg:hidden pr-5 lg:pr-0">
        <GiHamburgerMenu
          size={25}
          className={`flex lg:hidden cursor-pointer ${
            hideMenu ? "text-black dark:text-white" : "text-white"
          }`}
          onClick={handleChangeOpen}
        />
      </div>
    </nav>
  );
};

export default Menu;
