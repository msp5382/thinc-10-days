import styled from "styled-components";

const Box = styled.div`
  border: 2px solid pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
`;

const Textbox = styled.input`
  width: 100px;
  height: 20px;
  border: 1px solid pink;
  margin-right: 10px;
`;

const Button = styled.button`
  height: 20px;
  border: 1px solid pink;
`;

const Flex = styled.div`
  display: flex;
`;

export default function Home() {
  return (
    <Box>
      รหัสนิสิต 10 หลัก
      <Textbox />
      รหัสผ่าน CU-NET
      <Textbox />
      <Flex>
        <Button>เข้าสู่ระบบ</Button>
      </Flex>
    </Box>
  );
}
