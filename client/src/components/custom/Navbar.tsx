import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useStateContext } from "@/context/thirdweb";
import { CustomButton } from "./";
import { logo, menu, search, thirdweb } from "@/assets";
import { navlinks } from "@/constants";
import { Icon, Icons } from "./Icons";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address, disconnect } = useStateContext();

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 ml-16 pr-2 h-[52px] bg-[#000000] border border-white/40 rounded-[100px]">
        <input
          type="text"
          placeholder="Search for campaigns"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
        />

        <div className="w-[72px] h-full rounded-[20px] bg-[#406be9] flex justify-center items-center cursor-pointer">
          <img
            src={search}
            alt="search"
            className="w-[15px] h-[15px] object-contain"
          />
        </div>
      </div>

      <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton
          btnType="button"
          title={address ? "Create a campaign" : "Connect"}
          styles={"bg-transparent hover:bg-neutral-700/20"}
          handleClick={() => {
            if (address) navigate("create-campaign");
            else connect();
          }}
        />
      </div>

      {/* Small screen navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img
            src={logo}
            alt="user"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>

        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />

        <div
          className={`absolute top-[60px] right-0 left-0 bg-[#000000] z-10 border border-white/30 rounded-md py-4 ${
            !toggleDrawer ? "-translate-y-[120vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul>
            {navlinks.map((link, idx) => (
              <li
                key={link.name}
                className={`flex p-3 items-center ${
                  isActive === link.name && "bg-[#000000]"
                }`}
                onClick={async () => {
                  if (link.name === "Logout") return disconnect();
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <Icon
                  key={link.name}
                  {...link}
                  isActive={isActive}
                  handleClick={() => {
                    if (link.name === "Logout") return disconnect();
                    setIsActive(link.name);
                    navigate(link.link);
                  }}
                >
                  {Icons[idx]}
                </Icon>
                <p
                  className={`ml-[20px] font-epilogue font-semibold text-base ${
                    isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"
                  }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex mx-4">
            <CustomButton
              btnType="button"
              title={address ? "Create a campaign" : "Connect"}
              styles={"bg-transparent hover:bg-neutral-700/20"}
              handleClick={() => {
                if (address) navigate("create-campaign");
                else connect();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
