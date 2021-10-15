import GetPasswordInfoInput from "../components/getpasswordinfo_input";
import { useRef, useState, useEffect } from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import GlassBackButton from "../components/GlassBackButton";


const GetPasswordInfo = () => {
  const footerRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(footerRef.current?.offsetHeight ?? 0);
  }, [footerRef]);
  return (
    <div
      className="h-screen w-screen bg-cover"
      style={{
        backgroundImage: "url(/background-pictures/getpasswordinfo-background.svg)",
      }}
    >

      <div
        style={{
          height: `calc(100vh - ${height}px)`,
        }}
        
        className="flex flex-col items-center justify-center py-4"
      >
        <div className="flex flex-col"><GlassBackButton /></div>
        <div className="mt-8 mb-2 text-3xl">นิสิตใหม่รับรหัสผ่าน CUNET</div>
        <div
          style={{ backgroundColor: "rgb(255,255,255,0.5)" }}
          className="relative w-full max-w-xl min-h-auto rounded-3xl p-6 backdrop-blur-3xl filter text-xl flex flex-col justify-center"
        >
          <GetPasswordInfoInput title="เลขประจำตัวนิสิต ( Student ID )" />
          <GetPasswordInfoInput type="password" title="เลขประจำตัวประชาชน ( Citizen ID )" />
          <div className="items-center flex flex-row justify-center my-4">
            <Button
              onClick={() => {}}
              className=" rounded-xl px-6 py-2 text-xl text-white active:shadow-inner-deep "
              style={{
                background:
                  "linear-gradient(93.72deg, #FB70AA 11.59%, rgba(231, 78, 215, 0.9) 89.1%)",
              }}
            >
            รับรหัสผ่าน
            </Button>
          </div>
        </div>
      </div>
      <Footer ref={footerRef} />
    </div>
  );
};

export default GetPasswordInfo;