import Navbar from "../components/navbar";
import InfoCard from "../components/InfoCard";
import MoreCard from "../components/MoreCard";

import UpLoadIC from "../public/icons/upload_to_clound.svg";
import TimeTable from "../public/icons/time_table.svg";
import Book from "../public/icons/book.svg";

const Index = () => {
  const moreInfoList = [
    {
      icFile: UpLoadIC,
      title: "ระบบการอัปโหลดเอกสารแรกเข้า",
      description: "กำหนดการ และข้อมูลการส่งเอกสารสำหรับการลงทะเบียนแรกเข้า",
    },
    {
      icFile: TimeTable,
      title: "ระบบการลงทะเบียนเรียน-ถอนรายวิชา",
      description:
        "รายละเอียดเอกสารสำหรับการลงทะเบียน และข้อตกลงในการถอนรายวิชา",
    },
    {
      icFile: Book,
      title: "ตรวจสอบคะแนนอย่างไม่เป็นทางการ",
      description: "ระบบสำหรับการตรวจสอบคะแนนของนิสิต",
    },
  ];
  return (
    <>
      <div className="fixed top-0 w-screen ">
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
            <div className="text-6xl">สวัสดีคุณ XXXX</div>
            <div className="text-xl">
              ยินดีต้อนรับเข้าสู่ระบบจัดการข้อมูลนิสิต
            </div>
          </div>
          <InfoCard />
          <div className="space-y-4">
            <div className="text-3xl">ข้อมูลอื่น ๆ</div>
            {moreInfoList.map((value, index) => {
              return (
                <MoreCard
                  key={index}
                  imgSrc={value.icFile}
                  title={value.title}
                  description={value.description}
                  linkUrl="/"
                />
              );
            })}
          </div>
        </div>
        <div className="col-end-8 col-span-2 "></div>
      </div>
    </>
  );
};

export default Index;
