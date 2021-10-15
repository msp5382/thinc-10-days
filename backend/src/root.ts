import addUser from "./resolvers/addUser";
import getPassword from "./resolvers/getPassword";
import login from "./resolvers/login";
import changePassword from "./resolvers/changePassword";
import me from "./resolvers/me";
import addUserInfo from "./resolvers/addUserInfo";
import myInfo from "./resolvers/myInfo";
import addStudentData from "./resolvers/addStudentData";
import studentData from "./resolvers/studentData";
import addSubject from "./resolvers/addSubject";
const root = {
  me,
  addUser,
  getPassword,
  login,
  changePassword,
  addUserInfo,
  myInfo,
  addStudentData,
  studentData,
  addSubject,
};

export default root;
