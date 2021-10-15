import Button from "./Button";

const InfoCard = () => {
  return (
    <div
      style={{
        background:
          " linear-gradient(95.41deg, rgba(255, 64, 167, 0.28) 8.67%, rgba(255, 76, 248, 0.12) 90.91%)",
        boxShadow: " 4px 4px 10px rgba(0, 0, 0, 0.15)",
      }}
      className="w-full my-4 flex flex-row h-[200px]
      "
    >
      <div className="flex flex-col h-full justify-between p-8">
        <div>
          <div className="text-3xl">ข้อมูลส่วนตัวของคุณยังไม่ครบถ้วน</div>
          <div className="text-xl">
            กรุณากรอกข้อมูลเพิ่มเติมเพื่อใช้งานบัญชี
          </div>
        </div>
        <div className="w-[250px] flex flex-col">
          <Button>กรอกข้อมูล</Button>
        </div>
      </div>
    </div>
  );
};
export default InfoCard;
