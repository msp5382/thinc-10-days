/* eslint-disable */
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const Menu = ({ text, isRed, ...props }) => (
    <button
        {...props}
        className={`w-full text-left outline-none border-t px-3 text-lg font-thin border-[#C588BC] ${isRed && "text-red-500"
            }`}
    >
        {text}
    </button>
);

const UserInfo = ({ }) => {
    const ref = useRef();
    const [width, setWidth] = useState(100);
    const [showDropdown, setIsShopDropDown] = useState(false);
    useEffect(() => {
        if (ref.current) {
            setWidth(ref.current.offsetWidth);
        }
    }, [ref.current]);
    return (
        <div className="relative">
            <div className="flex items-center">
                {/* <Image src="/icons/home.svg" height={40} width={34}></Image> */}
                <div
                    className="mx-3 rounded-full w-10 h-10 bg-cover"
                    style={{
                        backgroundImage:
                            "url(https://use-me-as-placeholder.vercel.app/student.jpg)",
                    }}
                ></div>
                <div ref={ref} className="z-40 text-lg">
                    นาย พชรพล แสนแก้ว
                </div>
                <Image
                    onClick={() => setIsShopDropDown(!showDropdown)}
                    className="z-40 cursor-pointer"
                    src="/icons/chevron_down.svg"
                    height={20}
                    width={30}
                ></Image>
            </div>
            <div
                style={{
                    width: 160,
                    height: showDropdown ? 175 : 0,
                    marginTop: -40,
                    paddingTop: 30,
                    opacity: showDropdown ? 1 : 0,
                }}
                className="rounded-xl right-0 glass absolute overflow-hidden bg-white transition-all"
            >
                <div>
                    <Menu text="ข้อมูลส่วนตัว"></Menu>
                    <Menu text="อัปโหลดเอกสาร"></Menu>
                    <Menu text="ลงทะเบียนเรียน"></Menu>
                    <Menu text="ตรวจสอบคะแนน"></Menu>
                    <Menu isRed text="ออกจากระบบ"></Menu>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
