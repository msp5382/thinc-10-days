import UserInfo from "./UserInfo";
import Image from "next/image";
import CULogo from "../public/logo_CU_pure.png";

const Navbar = () => {
  return (
    <div className="w-full px-4 py-3 flex flex-row justify-between items-center">
      <div className="w-[100px]">
        <Image src={CULogo} placeholder="blur" />
      </div>
      <div>
        <UserInfo />
      </div>
    </div>
  );
};

export default Navbar;
