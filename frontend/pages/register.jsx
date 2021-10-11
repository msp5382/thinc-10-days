import Image from "next/image";
import LogoCU from "../public/logo_CU.png";
import BackOutlineIcon from "../public/icons/back_outline.svg";

const Register = () => {
  return (
    <div
      className="h-screen w-screen bg-cover grid grid-cols-7 p-12"
      style={{
        backgroundImage: "url(/background-pictures/register-background.svg)",
      }}
    >
      <div className="col-start-1 col-end-3 px-8 flex flex-col items-center">
        <Image src={LogoCU} alt="logo_CU" placeholder="blur" />
        <div className="px-4 py-3 mt-8 max-w-[250px] text-2xl text-center border-4 rounded-2xl filter backdrop-blur-3xl text-white border-white bg-white/30 border-dashed">
          คุณเข้าสู่ระบบครั้งแรก <br /> กรุณากรอกข้อมูลส่วนตัว
        </div>
      </div>
      <div className="col-start-3 col-span-5 pl-4">
        <div className="flex flex-row">
          <button className="border-2 rounded-2xl border-white flex justify-center filter backdrop-blur-3xl items-center p-1 bg-white/50 active:scale-90 transition-all">
            <Image src={BackOutlineIcon} width={28} height={28} alt="back" />
          </button>
        </div>
        <div className="my-12 bg-white/40 p-9 border-2 rounded-2xl border-white/ filter backdrop-blur-3xl"></div>
      </div>
    </div>
  );
};

export default Register;
