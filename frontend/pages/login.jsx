import Image from "next/image";
import LoginInput from "./components/login/login_input";

import LogoChula from "../public/logo_chula.png";

const Login = () => {
  return (
    <div
      className="h-screen w-screen bg-cover flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url(/background-pictures/login-background.svg)",
      }}
    >
      <Image
        src={LogoChula}
        width="282"
        height="164"
        placeholder="blur"
        alt="chula logo"
      />
      <div className="mt-14 mb-2 text-3xl">เข้าสู่ระบบลงทะเบียนเรียน</div>
      <div
        style={{ backgroundColor: "rgb(255,255,255,0.5)" }}
        className="w-full max-w-xl min-h-auto rounded-3xl p-6 backdrop-blur-3xl filter text-xl"
      >
        <LoginInput title="รหัสนิสิต 10 หลัก" />
        <LoginInput title="รหัสผ่าน CU-NET" />
      </div>
    </div>
  );
};

export default Login;
