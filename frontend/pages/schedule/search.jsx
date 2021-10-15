import Image from "next/image";
import Link from "next/link";
import UserInfo from "../../components/UserInfo";
import { useRef, useState, useEffect } from "react";

const Search = () => {
  return (
    <div
      className="h-screen w-screen bg-cover"
      style={{
        backgroundImage: "url(/background-pictures/schedule-background.svg)",
      }}
    >
      <div className="container max-w-5xl w-11/12 mx-auto pt-5">
        <div className="flex justify-between">
          <Image width={125} height={65} src="/logo_CU_pure.png"></Image>
          <UserInfo></UserInfo>
        </div>

      </div>
    </div>
  );
};

export default Search;
