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
            <StepProgressBar curStep={3} />
          </div>
        </div>
        <div className="col-end-8 col-span-5 flex flex-col pt-16 space-y-5">
          <div className="w-full glass shadow-lg p-6 rounded-xl flex flex-col text-2xl space-y-4">
            <div className="flex flex-row items-center text-3xl space-x-2">
              <div>ระดับมัธยมศึกษา</div>
            </div>
            <div className="w-full h-[2px] bg-black" />
            <div className="flex flex-row items-center">
              ท่านเคยดำรงตำแหน่งสูงสุดในหัวข้อใด
              <div className="w-[120px] ml-4 ">
                <Select />
              </div>
            </div>
            <div className="flex flex-row items-center">
              ท่านเคยร่วมกิจกรรมของโรงเรียนในประเภทใดมากที่สุด
              <div className="w-[120px] ml-4 ">
                <Select />
              </div>
            </div>
            <div className="flex flex-col">
              ท่านเคยร่วมกิจกรรมของโรงเรียนในประเภทใดมากที่สุด
              <div className="w-full flex flex-row items-center justify-between px-16">
                <div className="flex flex-row items-center">
                  <input type="radio" />
                  <label className="ml-2 text-xl">
                    ร่วมกิจกรรมเป็นครั้งคราวเมื่อมีรายการที่สนใจ
                  </label>
                </div>
                <div className="flex flex-row items-center">
                  <input type="radio" />
                  <label className="ml-2 text-xl">เป็นสมาชิกชมรม</label>
                </div>
                <div className="flex flex-row items-center">
                  <input type="radio" />
                  <label className="ml-2 text-xl">เป็นกรรมการบริหาร</label>
                </div>
              </div>
              <div className="flex flex-col">
                ท่านสนใจเข้าร่วมกิจกรรมสังกัดชมรมฝ่ายกีฬาสโมสรนิสิต
                หรือชอบเล่นกีฬาใดมากที่สุด
                <div className="w-full flex flex-row items-center justify-between px-16">
                  <div className="flex flex-row items-center">
                    <input type="radio" />
                    <label className="ml-2 text-xl">กีฬา</label>
                  </div>
                  <div className="flex flex-row items-center">
                    <input type="radio" />
                    <label className="ml-2 text-xl">กีฬาทางน้ำ</label>
                  </div>
                  <div className="flex flex-row items-center">
                    <input type="radio" />
                    <label className="ml-2 text-xl">เทนนิส</label>
                  </div>
                  <div className="flex flex-row items-center">
                    <input type="radio" />
                    <label className="ml-2 text-xl">แบดมินตัน</label>
                  </div>
                  <div className="flex flex-row items-center">
                    <input type="radio" />
                    <label className="ml-2 text-xl">อื่น ๆ</label>
                  </div>
                </div>
                <div className="w-full flex flex-row items-center justify-between px-16">
                  <div className="flex flex-row items-center">
                    <input type="radio" />
                    <label className="ml-2 text-xl">ฟุตบอล</label>
                  </div>
                  <div className="flex flex-row items-center">
                    <input type="radio" />
                    <label className="ml-2 text-xl">วอลเลย์บอล</label>
                  </div>
                  <div className="flex flex-row items-center">
                    <input type="radio" />
                    <label className="ml-2 text-xl">ฟุตบอล</label>
                  </div>
                  <div className="flex flex-row items-center">
                    <input type="radio" />
                    <label className="ml-2 text-xl">บริดจ์และหมากกระดาน</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                ท่านเคยเป็นตัวแทนนักกีฬาเพื่อเข้าแข่งขันระดับสูงสุดระดับใด
                <div className="w-[120px] ml-4">
                  <Select></Select>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full justify-center space-x-4">
              <BackButton
                onClick={() => {
                  window.location.href = "/information/3";
                }}
              >
                ย้อนกลับ
              </BackButton>
              <Button
                onClick={() => {
                  window.location.href = "/";
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
