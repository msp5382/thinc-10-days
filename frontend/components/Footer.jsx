/* eslint-disable */

import Image from "next/image";
import LogoChula from "../public/logo_grey_chula.png";
import React from "react";

const Footer = React.forwardRef((_, ref) => {
  return (
    <div ref={ref}>
      <div
        style={{ backgroundColor: "#E5E5E5" }}
        className="w-screen flex px-7 py-2 flex-row justify-between shadow-inner"
      >
        <Image
          src={LogoChula}
          width={46}
          height={70}
          alt="logo chula"
          placeholder="blur"
        />
        <div className="flex flex-col items-end">
          <div className="text-lg" style={{ color: "#707070" }}>
            สำนักงานการทะเบียน - จุฬาลงกรณ์มหาวิทยาลัย
          </div>
          <div style={{ color: "#808080" }}>
            อาคารจามจุรี 6 ซอย บัณฑิตวิทยาลัย แขวง วังใหม่ เขตปทุมวัน
            กรุงเทพมหานคร 10330
          </div>
          <div style={{ color: "#808080" }}>อีเมล : webreg@chula.ac.th</div>
        </div>
      </div>
    </div>
  );
});
export default Footer;
