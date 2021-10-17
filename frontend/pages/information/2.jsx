import Navbar from "../../components/navbar";
import StepProgressBar from "../../components/StepProgressBar";
import TextField from "../../components/TextField";
import Select from "../../components/Select";

const Information2 = () => {
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
            <StepProgressBar curStep={1} />
          </div>
        </div>
        <div className="col-end-8 col-span-5 flex flex-col pt-16 space-y-5">
          <div className="w-full glass shadow-lg p-6 rounded-xl flex flex-col text-2xl space-y-4">
            <div className="flex flex-row items-center text-3xl space-x-2">
              <div>ข้อมูลบิดา</div>
              <div className="text-lg space-x-2 flex flex-row items-center mt-2">
                <input type="radio" />
                <label>มีชีวิตอยู่</label>
              </div>
              <div className="text-lg space-x-2 flex flex-row items-center mt-2">
                <input type="radio" />
                <label>ถึงแก่กรรม</label>
              </div>
            </div>
            <div className="w-full h-[2px] bg-black" />
            <div className="flex flex-row items-center">
              ชื่อ
              <div className="w-[150px] mx-2">
                <TextField />
              </div>
              นามสกุล
              <div className="w-[150px] mx-2">
                <TextField />
              </div>
              เลขประจำตัวประชาชน
              <div className="w-[150px] mx-2">
                <TextField />
              </div>
            </div>
            <div className="flex flex-row items-center">
              วุฒิการศึกษาสูงสุดของบิดา
              <div className="w-[150px] mx-2">
                <Select />
              </div>
              อาชีพของบิดา
              <div className="w-[150px] mx-2">
                <Select />
              </div>
            </div>
            <div className="flex flex-row items-center">
              รายได้เฉพาะของบิดาโดยเฉลี่ยเดือนละ
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
              บาท
            </div>
            <div className="flex flex-row items-center text-3xl space-x-2">
              <div>ข้อมูลมารดา</div>
              <div className="text-lg space-x-2 flex flex-row items-center mt-2">
                <input type="radio" />
                <label>มีชีวิตอยู่</label>
              </div>
              <div className="text-lg space-x-2 flex flex-row items-center mt-2">
                <input type="radio" />
                <label>ถึงแก่กรรม</label>
              </div>
            </div>
            <div className="w-full h-[2px] bg-black" />
            <div className="flex flex-row items-center">
              ชื่อ
              <div className="w-[150px] mx-2">
                <TextField />
              </div>
              นามสกุล
              <div className="w-[150px] mx-2">
                <TextField />
              </div>
              เลขประจำตัวประชาชน
              <div className="w-[150px] mx-2">
                <TextField />
              </div>
            </div>
            <div className="flex flex-row items-center">
              วุฒิการศึกษาสูงสุดของมารดา
              <div className="w-[150px] mx-2">
                <Select />
              </div>
              อาชีพของมารดา
              <div className="w-[150px] mx-2">
                <Select />
              </div>
            </div>
            <div className="flex flex-row items-center">
              รายได้เฉพาะของมารดาโดยเฉลี่ยเดือนละ
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
              บาท
            </div>
            <div className="flex flex-row items-center text-3xl space-x-2">
              <div>
                ข้อมูลผู้ปกครอง{" "}
                <span className="text-lg">
                  (ในกรณีที่ไม่ได้อยู่กับบิดามารดา)
                </span>
              </div>
            </div>
            <div className="w-full h-[2px] bg-black" />
            <div className="flex flex-row items-center">
              ชื่อผู้ปกครอง
              <div className="w-[300px] mx-2">
                <TextField />
              </div>
              เชื้อชาติ
              <div className="w-[80px] mx-2">
                <TextField />
              </div>
              สัญชาติ
              <div className="w-[80px] mx-2">
                <TextField />
              </div>
            </div>
            <div className="flex flex-row items-center">
              วุฒิการศึกษาสูงสุดของมารดา
              <div className="w-[150px] mx-2">
                <Select />
              </div>
              อาชีพของมารดา
              <div className="w-[150px] mx-2">
                <Select />
              </div>
            </div>
            <div className="flex flex-row items-center">
              รายได้เฉพาะของมารดาโดยเฉลี่ยเดือนละ
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
              บาท
            </div>
            <div className="flex flex-row items-center text-3xl space-x-2">
              <div>
                ข้อมูลผู้ปกครอง{" "}
                <span className="text-lg">
                  (ในกรณีที่ไม่ได้อยู่กับบิดามารดา)
                </span>
              </div>
            </div>
            <div className="w-full h-[2px] bg-black" />
            <div className="flex flex-row items-center">
              ชื่อผู้ปกครอง
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
              เชื้อชาติ
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
              สัญชาติ
              <div className="w-[120px] mx-2">
                <TextField />
              </div>
            </div>
            <div className="flex flex-row items-center">
              ที่อยู่
              <div className="w-[300px] mx-2">
                <TextField />
              </div>
              จังหวัด
              <div className="w-[80px] mx-2">
                <Select />
              </div>
              อำเภอ
              <div className="w-[80px] mx-2">
                <Select />
              </div>
              ตำบล
              <div className="w-[80px] mx-2">
                <Select />
              </div>
              รหัสไปรษณีย์
              <div className="w-[80px] mx-2">
                <TextField />
              </div>
            </div>
            <div className="flex flex-row items-center">
              เบอร์โทรศัพท์มือถือ
              <div className="w-[200px] mx-2">
                <TextField />
              </div>
              อาชีพของผู้ปกครอง
              <div className="w-[80px] mx-2">
                <Select />
              </div>
              วุฒิการศึกษา
              <div className="w-[80px] mx-2">
                <Select />
              </div>
            </div>
            <div className="flex flex-row items-center">
              รายได้เฉพาะของผู้ปกครองโดยเฉลี่ยเดือนละ
              <div className="w-[200px] mx-2">
                <TextField />
              </div>
              บาท
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information2;
