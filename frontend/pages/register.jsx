import Image from "next/image";
import LogoCU from "../public/logo_CU.png";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Select from "../components/Select";
import GlassBackButton from "../components/GlassBackButton";

const Register = () => {
  return (
    <div
      className="h-screen w-screen bg-cover grid grid-cols-11 p-12"
      style={{
        backgroundImage: "url(/background-pictures/register-background.svg)",
      }}
    >
      <div className="col-start-2 col-end-5 pr-16 flex flex-col">
        <div className="flex flex-col items-center">
          <Image src={LogoCU} alt="logo_CU" placeholder="blur" />
          <div className="px-4 py-3 mt-8 max-w-[250px] text-2xl text-center border-4 rounded-2xl filter backdrop-blur-3xl text-white border-white bg-white/30 border-dashed">
            คุณเข้าสู่ระบบครั้งแรก <br /> กรุณากรอกข้อมูลส่วนตัว
          </div>
        </div>
      </div>
      <div className="col-start-5 col-span-6 pl-4">
        <div className="flex flex-row">
          <GlassBackButton />
        </div>
        <div className="mt-12 py-4 px-6 border-2 rounded-2xl border-white/40 glass flex flex-row flex-wrap space-y-2">
          <div className="flex flex-row justify-between w-full items-center">
            <TextField
              width="32%"
              title="รหัสนิสิต"
              placeholder="ใส่รหัสนิสิต 10 หลัก"
            />
            <TextField
              width="65%"
              title="เลขบัตรประจำตัวประชาชน"
              placeholder="ใส่เลขประจำตัว 13 หลัก"
            />
          </div>
          <div className="flex flex-row justify-between w-full items-center">
            <Select
              width="24%"
              title="คำนำหน้า"
              placeholder="ใส่รหัสนิสิต 10 หลัก"
            >
              <option>ใส่คำนำหน้า</option>
              <option>นาย</option>
              <option>นางสาว</option>
            </Select>
            <TextField
              width="35%"
              title="ชื่อ"
              placeholder="ใส่เลขประจำตัว 13 หลัก"
            />
            <TextField
              width="35%"
              title="นามสกุล"
              placeholder="ใส่เลขประจำตัว 13 หลัก"
            />
          </div>
          <div className="flex flex-row justify-between w-full items-center">
            <Select width="31%" title="วัน/เดือน/ปี เกิด">
              <option>ใส่คำนำหน้า</option>
              <option>นาย</option>
              <option>นางสาว</option>
            </Select>
            <Select width="20%" title="หมู่เลือด">
              <option>O</option>
              <option>A</option>
              <option>B</option>
              <option>AB</option>
            </Select>
            <TextField
              width="20%"
              title="สัญชาติ"
              placeholder="ใส่เลขประจำตัว 13 หลัก"
            />
            <TextField
              width="20%"
              title="เชื้อชาติ"
              placeholder="ใส่เลขประจำตัว 13 หลัก"
            />
          </div>
          <div className="flex flex-row justify-between w-full items-center">
            <TextField
              width="24%"
              title="ความพิการ"
              placeholder="ใส่เลขประจำตัว 13 หลัก"
            />
            <TextField
              width="35%"
              title="เบอร์โทรศัพท์มือถือชื่อ"
              placeholder="ใส่เลขประจำตัว 13 หลัก"
            />
            <TextField
              width="35%"
              title="อีเมล"
              placeholder="ใส่เลขประจำตัว 13 หลัก"
            />
          </div>
          <div className="flex flex-row justify-between w-full items-center">
            <Select
              width="62%"
              title="โรงเรียนที่จบการศึกษา"
              placeholder="ใส่รหัสนิสิต 10 หลัก"
            ></Select>
            <TextField
              width="35%"
              title="แผนการเรียน"
              placeholder="ใส่เลขประจำตัว 13 หลัก"
            />
          </div>
          <div className="flex flex-row justify-between w-full items-center">
            <TextField
              width="35%"
              title="เกรดเฉลี่ยสะสม (GPAX)"
              placeholder="ใส่เลขประจำตัว 13 หลัก"
            />
            <TextField
              width="35%"
              title="เข้าศึกษาจาก"
              placeholder="ใส่เลขประจำตัว 13 หลัก"
            />
            <Select
              width="24%"
              title="ศึกษาที่จุฬาครั้งแรก"
              placeholder="ใส่รหัสนิสิต 10 หลัก"
            >
              <option>ใส่คำนำหน้า</option>
              <option>นาย</option>
              <option>นางสาว</option>
            </Select>
          </div>
          <div className="flex flex-row justify-center w-full pt-5">
            <Button>สมัคร</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
