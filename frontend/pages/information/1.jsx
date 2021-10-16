import Navbar from "../../components/navbar";
import StepProgressBar from "../../components/StepProgressBar";
import TextField from "../../components/TextField";
import Select from "../../components/Select";

const Information1 = () => {
  return (
    <>
      <div className="fixed top-0 w-screen">
        <Navbar />
      </div>
      <div
        style={{
          background: "url(/background-pictures/information-background.svg)",
          backgroundSize: "cover",
        }}
        className="min-h-screen min-w-screen grid grid-cols-7 p-8 gap-2"
      >
        <div className="col-start-1 col-span-2 flex flex-col px-8 py-12 ">
          <div className="flex flex-col items-center glass shadow-lg rounded-xl py-2 m-8">
            <div className="text-4xl">Personal Infomation</div>
            <div className="text-3xl">ข้อมูลส่วนตัว</div>
          </div>
          <div className="ml-12 mt-6">
            <StepProgressBar curStep={0} />
          </div>
        </div>
        <div className="col-end-8 col-span-5 flex flex-col pt-16 space-y-5">
          <div className="w-full glass shadow-lg p-6 rounded-xl flex flex-col text-2xl space-y-4">
            <div className="flex flex-row items-center">
              ท่านเป็นบุตรคนที่{" "}
              <div className="w-[40px] mx-2">
                <TextField />
              </div>
              จำนวนพี่น้องที่มีชีวิตอยู่ รวมทั้งตนเอง
              <div className="w-[40px] mx-2">
                <TextField />
              </div>
              คน
            </div>
            <div className="flex flex-row items-center">
              จำนวนพี่น้องที่มีรายได้แล้ว
              <div className="w-[40px] mx-2">
                <TextField />
              </div>
              จำนวนพี่น้องที่กำลังศึกษาอยู่รวมทั้งตนเอง
              <div className="w-[40px] mx-2">
                <TextField />
              </div>
              คน
            </div>
            <div className="flex flex-row items-center">
              ปัจจุบันอาศัยอยู่กับ
              <div className="w-[150px] mx-2">
                <Select />
              </div>
              ได้รับอุปการะด้านการเงินโดยเฉลี่ยเดือนละ
              <div className="w-[100px] mx-2">
                <TextField />
              </div>
              บาท
            </div>
            <div className="flex flex-row items-center">
              ท่านเดินทางมาศึกษาโดย
              <div className="w-[150px] mx-2">
                <Select />
              </div>
              ท่านช่วยทำงานบ้านสัปดาห์ละ
              <div className="w-[100px] mx-2">
                <TextField />
              </div>
              ชั่วโมง
            </div>
            <div className="flex flex-row items-center">
              ขณะที่ศึกษาในจุฬาลงกรณ์มหาวิทยาลัย
              ท่านประสงค์จะขอรับเงินอุดหนุนการศึกษา
              <div className="w-[120px] mx-2">
                <Select />
              </div>
            </div>
            <div className="flex flex-row items-center">
              ขณะที่ศึกษาอยู่ในจุฬาลงกรณ์มหาวิทยาลัย
              ท่านต้องการพักในหอพักหรือไม่
              <div className="w-[120px] mx-2">
                <Select />
              </div>
            </div>
            <div className="flex flex-row items-center text-3xl space-x-2">
              <div>ข้อมูลนักศึกษาวิชาทหาร</div>
              <div className="text-lg space-x-2 flex flex-row items-center mt-2">
                <input type="radio" />
                <label>ศึกษา</label>
              </div>
              <div className="text-lg space-x-2 flex flex-row items-center mt-2">
                <input type="radio" />
                <label>ไม่ศึกษา</label>
              </div>
            </div>
            <div className="w-full h-[2px] bg-black" />
            <div className="flex flex-row items-center">
              ปัจจุบันท่านสำเร็จการศึกษาวิชาทหาร ชั้นปีที่
              <div className="w-[120px] mx-2">
                <Select />
              </div>
            </div>
            <div className="flex flex-row items-center">
              ขณะศึกษาในจุฬาลงกรณ์มหาวิทยาลัย
              ท่านประสงค์จะศึกษาวิชาทหารต่อหรือไม่
              <div className="w-[120px] mx-2">
                <Select />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information1;
