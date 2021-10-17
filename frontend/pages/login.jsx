import Image from "next/image";
import Link from "next/link";
import LoginInput from "../components/login/login_input";
import { useRef, useState, useEffect } from "react";

import LogoChula from "../public/logo_chula.png";
import Ball from "../public/holy_shit_ball.svg";
import Footer from "../components/Footer";
import Button from "../components/Button";
import axios from "axios";

const Login = () => {
  const footerRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(footerRef.current?.offsetHeight ?? 0);
  }, [footerRef]);

  const handleClick = () => {
    localStorage.setItem('token', 'testststtststs')
    window.location.href = "/main";
  }

  return (
    <div
      className="h-screen w-screen bg-cover"
      style={{
        backgroundImage: "url(/background-pictures/login-background.svg)",
      }}
    >
      <div
        style={{
          height: `calc(100vh - ${height}px)`,
        }}
        className="flex flex-col items-center justify-center py-4"
      >
        <Image
          src={LogoChula}
          width="282"
          height="164"
          placeholder="blur"
          alt="chula logo"
        />
        <div className="mt-8 mb-2 text-3xl">เข้าสู่ระบบลงทะเบียนเรียน</div>
        <div
          style={{ backgroundColor: "rgb(255,255,255,0.5)" }}
          className="relative w-full max-w-xl min-h-auto rounded-3xl p-6 backdrop-blur-3xl filter text-xl flex flex-col justify-center"
        >
          <LoginInput title="รหัสนิสิต 10 หลัก" />
          <LoginInput type="password" title="รหัสผ่าน CU-NET" />
          <div className="items-center flex flex-row justify-center my-4">
            <Button
              onClick={handleClick}
              className=" rounded-xl px-6 py-2 text-xl text-white active:shadow-inner-deep "
              style={{
                background:
                  "linear-gradient(93.72deg, #FB70AA 11.59%, rgba(231, 78, 215, 0.9) 89.1%)",
              }}
            >
              เข้าสู่ระบบ
            </Button>
          </div>
          <div className="flex flex-row justify-center space-x-3 items-center">
            <div className="hover:opacity-60">
              <Link className="hover:opacity-60" href="/">
                <a>เปลี่ยนรหัสผ่าน</a>
              </Link>
            </div>
            <div
              style={{
                width: "1.5px",
                height: "14px",
                background: "#808080",
                opacity: "0.60",
              }}
            />
            <div className="hover:opacity-60">
              <Link href="/">
                <a>ลืมรหัสผ่าน</a>
              </Link>
            </div>
            <div
              style={{
                width: "1.5px",
                height: "14px",
                background: "#808080",
                opacity: "0.60",
              }}
            />
            <div className="hover:opacity-60">
              <Link href="/">
                <a>ขอรับรหัส CU-NET</a>
              </Link>
            </div>
          </div>
          <div className="transform absolute bottom-1 right-0 translate-x-20 translate-y-20">
            <Image
              width={150}
              height={150}
              src={Ball}
              alt="just beautiful ball"
            />
          </div>
        </div>
      </div>
      <Footer ref={footerRef} />
    </div>
  );
};

export default Login;
