import Button from "../../components/Button";
import BackButton from "../../components/BackButton";

import Navbar from "../../components/navbar";
import StepProgressBar from "../../components/StepProgressBar";
import TextField from "../../components/TextField";
import Select from "../../components/Select";

const Information3 = () => {
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
            <StepProgressBar curStep={2} />
          </div>
        </div>
        <div className="col-end-8 col-span-5 flex flex-col pt-16 space-y-5">
          <div className="w-full glass shadow-lg p-6 rounded-xl flex flex-col text-2xl space-y-4">
            <div className="flex flex-row items-center text-3xl space-x-2">
              <div>ที่อยู่ตามทะเบียนบ้าน</div>
            </div>
            <div className="w-full h-[2px] bg-black" />
            <div className="flex flex-row items-center">
              บ้านเลขที่
              <div className="w-[100px] mx-2">
                <TextField />
              </div>
              หมู่ที่
              <div className="w-[60px] mx-2">
                <TextField />
              </div>
              ตรอก/ซอย
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
              อาคาร
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
              หมู่บ้าน
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
            </div>
            <div className="flex flex-row items-center">
              ถนน
              <div className="w-[100px] mx-2">
                <TextField />
              </div>
              จังหวัด
              <div className="w-[120px] mx-2">
                <Select />
              </div>
              อำเภอ
              <div className="w-[120px] mx-2">
                <Select />
              </div>
              ตำบล
              <div className="w-[120px] mx-2">
                <Select />
              </div>
              รหัสไปรษณีย์
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
            </div>
            <div className="flex flex-row items-center">
              เลขรหัสประจำบ้าน
              <div className="w-[150px] mx-2">
                <TextField />
              </div>
              โทรศัพท์
              <div className="w-[150px] mx-2">
                <TextField />
              </div>
            </div>
            <div className="flex flex-row items-center text-3xl space-x-2 justify-between">
              <div>ที่อยู่ปัจจุบัน</div>
              <div className="text-lg space-x-2 flex flex-row items-center mt-2 pr-7">
                <input type="radio" />
                <label>ตรงกับทะเบียนบ้าน</label>
              </div>
            </div>
            <div className="w-full h-[2px] bg-black" />
            <div className="flex flex-row items-center">
              บ้านเลขที่
              <div className="w-[100px] mx-2">
                <TextField />
              </div>
              หมู่ที่
              <div className="w-[60px] mx-2">
                <TextField />
              </div>
              ตรอก/ซอย
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
              อาคาร
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
              หมู่บ้าน
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
            </div>
            <div className="flex flex-row items-center">
              ถนน
              <div className="w-[100px] mx-2">
                <TextField />
              </div>
              จังหวัด
              <div className="w-[120px] mx-2">
                <Select />
              </div>
              อำเภอ
              <div className="w-[120px] mx-2">
                <Select />
              </div>
              ตำบล
              <div className="w-[120px] mx-2">
                <Select />
              </div>
              รหัสไปรษณีย์
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
            </div>
            <div className="flex flex-row items-center">
              เลขรหัสประจำบ้าน
              <div className="w-[150px] mx-2">
                <TextField />
              </div>
              โทรศัพท์
              <div className="w-[150px] mx-2">
                <TextField />
              </div>
            </div>
            <div className="flex flex-row items-center text-3xl space-x-2 justify-between">
              <div>ที่อยู่สำหรับติดต่อฉุกเฉิน</div>
            </div>
            <div className="w-full h-[2px] bg-black" />
            <div className="flex flex-row items-center">
              ติดต่อชื่อ
              <div className="w-[100px] mx-2">
                <TextField />
              </div>
              นามสกุล
              <div className="w-[60px] mx-2">
                <TextField />
              </div>
              นามสกุล
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
              เกี่ยวข้องเป็น
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
              บ้านเลขที่
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
            </div>
            <div className="flex flex-row items-center">
              หมู่ที่
              <div className="w-[100px] mx-2">
                <TextField />
              </div>
              ตรอก/ซอย
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
              อาคาร
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
              หมู่บ้าน
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
              ถนน
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
            </div>
            <div className="flex flex-row items-center">
              จังหวัด
              <div className="w-[120px] mx-2">
                <Select />
              </div>
              อำเภอ
              <div className="w-[120px] mx-2">
                <Select />
              </div>
              ตำบล
              <div className="w-[120px] mx-2">
                <Select />
              </div>
              รหัสไปรษณีย์
              <div className="w-[80px] mx-2">
                <TextField />
              </div>
              โทรศัพท์
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
            </div>
            <div className="flex flex-row w-full justify-center space-x-4">
              <BackButton
                onClick={() => {
                  window.location.href = "/information/2";
                }}
              >
                ย้อนกลับ
              </BackButton>
              <Button
                onClick={() => {
                  window.location.href = "/information/4";
                }}
              >
                หน้าถัดไป
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information3;
