import { useState, useRef, useEffect } from "react";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "./Button";

const InfoCard = () => {
  const [progressHeight, setProgressHeight] = useState(200);
  const [progress, setProgress] = useState(25);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setProgressHeight(ref.current.offsetHeight);
    }
  }, []);
  return (
    <div
      style={{
        background:
          " linear-gradient(95.41deg, rgba(255, 64, 167, 0.28) 8.67%, rgba(255, 76, 248, 0.12) 90.91%)",
        boxShadow: " 4px 4px 10px rgba(0, 0, 0, 0.15)",
      }}
      className="w-full my-4 flex flex-row h-[200px] justify-between"
    >
      <div className="flex flex-col h-full justify-between p-8">
        <div>
          <div className="text-3xl">ข้อมูลส่วนตัวของคุณยังไม่ครบถ้วน</div>
          <div className="text-xl">
            กรุณากรอกข้อมูลเพิ่มเติมเพื่อใช้งานบัญชี
          </div>
        </div>
        <div className="w-[250px] flex flex-col">
          <Button
            onClick={() => {
              window.location.href = "/information/1";
            }}
          >
            กรอกข้อมูล
          </Button>
        </div>
      </div>
      <div
        ref={ref}
        style={{ width: `${progressHeight}px` }}
        className="h-full flex flex-col justify-center items-center p-4 mr-4"
      >
        <CircularProgressbarWithChildren
          styles={buildStyles({
            pathColor: "#00A624",
            textColor: "#00A624",
            textSize: "28px",
          })}
          strokeWidth={8}
          value={progress}
        >
          <strong className="text-5xl">{`${progress}%`}</strong>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};
export default InfoCard;
