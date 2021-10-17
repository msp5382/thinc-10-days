/* eslint-disable */
import Image from "next/image";

import Navbar from "../components/navbar";
import InfoCard from "../components/InfoCard";
import MoreCard from "../components/MoreCard";

import UpLoadIC from "../public/icons/upload_to_clound.svg";
import TimeTable from "../public/icons/time_table.svg";
import Book from "../public/icons/book.svg";

const Index = () => {
  const moreInfoList = [
    {
      icFile: TimeTable,
      title: "ระบบการลงทะเบียนเรียน-ถอนรายวิชา",
      description:
        "รายละเอียดเอกสารสำหรับการลงทะเบียน และข้อตกลงในการถอนรายวิชา",
      linkUrl: "/schedule/search",
    },
    {
      icFile: Book,
      title: "ตรวจสอบคะแนนอย่างไม่เป็นทางการ",
      description: "ระบบสำหรับการตรวจสอบคะแนนของนิสิต",
      linkUrl: "/information/1",
    },
  ];
  return (
    <>
      <div className="fixed top-0 w-screen z-50 ">
        <Navbar />
      </div>
      <div
        style={{
          background: "url(/background-pictures/index-background.svg)",
          backgroundSize: "cover",
        }}
        className="min-h-screen min-w-screen grid grid-cols-7 p-8 gap-2"
      >
        <div className="col-start-1 col-span-5 flex flex-col px-8 py-12 ">
          <div>
            <div className="text-6xl">สวัสดีคุณ พชรพล</div>
            <div className="text-xl">
              ยินดีต้อนรับเข้าสู่ระบบจัดการข้อมูลนิสิต
            </div>
          </div>
          <InfoCard />
          <div className="space-y-4">
            <div className="text-3xl mt-5">ข้อมูลอื่น ๆ</div>
            {moreInfoList.map((value, index) => {
              return (
                <MoreCard
                  key={index}
                  imgSrc={value.icFile}
                  title={value.title}
                  description={value.description}
                  linkUrl={value.linkUrl}
                />
              );
            })}
          </div>
        </div>
        <div className="col-end-8 col-span-2 flex flex-col pt-36 space-y-5">
          <div className="flex flex-col space-y-3 w-full">
            <div className="text-2xl">ปฏิทินการศึกษา</div>
            <div className="w-full glass text-xl rounded-xl shadow-lg flex flex-row items-center">
              <div className="h-full shadow-2xl rounded-xl glass p-2">
                1 ก.ค. - 20 ก.ค.
              </div>
              <div className="ml-6">อัปโหลดเอกสารลงทะเบียนแรกเข้า</div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 w-full">
            <div className="text-2xl">เอกสารคู่มือ</div>
            <div className="w-full p-2 glass text-xl rounded-xl shadow-lg flex flex-row items-center">
              <div className="opacity-50 flex flex-col">
                <Image alt="" src={Book} width={21} height={24} />
              </div>
              <div className="ml-6">
                เอกสารที่ต้องใช้ในการลงทะเบียนแรกเข้าออนไลน์
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 w-full">
            <div className="text-2xl">ช่องทางติดต่อสำนักงานการทะเบียน</div>
            <div className="w-full text-black/50 p-2 glass text-xl rounded-xl shadow-lg flex flex-col">
              <div className="text-3xl">อีเมล</div>
              <div>
                อาคารจามจุรี 6 ซอย บัณฑิตวิทยาลัย <br /> แขวง วังใหม่ เขตปทุมวัน
                กรุงเทพมหานคร 10330
              </div>
              <div className="text-3xl">ที่อยู่</div>
              <div>webreg@chula.ac.th</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
