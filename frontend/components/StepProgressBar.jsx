import Image from "next/image";
import Correct from "../public/icons/correct.svg";

const StepProgressBar = ({ curStep }) => {
  const step = [
    "ข้อมูลตนเอง",
    "ข้อมูลครอบครัว",
    "ที่อยู่",
    "กิจกรรมนอกหลักสูตร",
    "พิมพ์เอกสาร",
  ];
  return (
    <div className="flex flex-col">
      {step.map((value, index, array) => {
        return (
          <>
            <div>
              <div className="flex flex-row items-center">
                <div
                  style={{
                    background:
                      curStep >= index
                        ? "linear-gradient(180deg, rgba(207, 64, 251, 0.5) 0%, rgba(252, 108, 161, 0.5) 100%)"
                        : "rgba(255, 255, 255, 0)",
                    boxShadow: " 1px 1px 4px rgba(0, 0, 0, 0.3)",
                  }}
                  className={`w-[55px] h-[55px] rounded-full text-3xl flex flex-col justify-center items-center border-[3px] border-pink-400 ${
                    curStep == index ? "text-white" : "text-pink-500"
                  }`}
                >
                  {curStep > index ? (
                    <Image width={25} height={25} src={Correct} />
                  ) : (
                    `${index + 1}`
                  )}
                </div>
                <div className="ml-4">
                  <div className="text-2xl">{value}</div>
                  {curStep > index && (
                    <div className="text-pink-500">Complete</div>
                  )}
                </div>
              </div>
              {index < array.length - 1 && (
                <div className="w-[1px] h-[30px] bg-black/20 ml-[27.5px]" />
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default StepProgressBar;
