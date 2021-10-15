import { buildSchema } from "graphql";
const StudentData = `
id: Int
user_id: Int

child_order: Int
living_sibling: Int
has_income_sibling: Int
studying_sibling: Int
currently_living_with: String
income: Int
travel_way: String
chore_hours: Int
want_scholarship: Boolean
want_dormitory: Boolean
study_military: Boolean
currently_military_years: Int
is_study_military_in_cu: Int

father_firstname: String
father_lastname: String
father_id: String
father_degree: String
father_occupation: String
father_income: String
mother_firstname: String
mother_lastname: String
mother_id: String
mother_degree: String
mother_occupation: String
mother_income: String
marriage_status: String
gardian_firstname: String
gardian_lastname: String
gardian_id: String
gardian_degree: String
gardian_occupation: String
gardian_income: String

home_number: String
home_village_no: String
home_soi: String
home_building: String
home_village: String
home_road: String
home_province: String
home_ampure: String
home_tumbon: String
home_zip: String
home_code: String
home_phone: String

currently_number: String
currently_village_no: String
currently_soi: String
currently_building: String
currently_village: String
currently_road: String
currently_province: String
currently_ampure: String
currently_tumbon: String
currently_zip: String
currently_phone: String

emergency_firstname: String
emergency_lastname: String
emergency_relation: String
emergency_number: String
emergency_village_no: String
emergency_soi: String
emergency_building: String
emergency_village: String
emergency_road: String
emergency_province: String
emergency_ampure: String
emergency_tumbon: String
emergency_code: String
emergency_phone: String

max_occupation_highschool: String
activity_highschool: String
interested_activity: String
interested_sport: String
sport_level: String`;

const UserInfo = `
user_id: Int
prefix: String
birthday: String
blood_group: String
nationality: String
race: String
disibility: String
tel: String
email: String
school: String
study_plan: String
gpax: String
entrace_way: String
is_first_time: Boolean`;
const schema = buildSchema(`
    type User {
      id: String,
      cunet_id: String,
      firstname: String,
      lastname: String,
      password: String,
      citizen_id: String,
    }

    type UserInfo {
        ${UserInfo}
    }

    input UserInfoInput {
        ${UserInfo}
    }

    type StudentData{
        ${StudentData}
    }

    input StudentDataInput{
        ${StudentData}
    }

    type SubjectSchedule{
        id: Int
        day: String
        start_time: String
        stop_time: String

        section: Int
        teacher: String
        code: String
        name: String
        credit: Int
        tag: [String]
    }

    input SubjectScheduleInput{
        id: Int
        day: String
        start_time: String
        stop_time: String

        section: Int
        teacher: String
        code: String
        name: String
        credit: Int
        tag: [String]
    }

    type Schedule{
        user_id: Int
        subjects: [SubjectSchedule]
    }

    type Credential{
        token: String
    }

    type Query{
        me: User
        myInfo: UserInfo
        studentData: StudentData
    }

    type Mutation {
        addUser(cunet_id: String, firstname: String, lastname: String,citizen_id:String): User,
        login(cunet_id: String, password: String): Credential
        getPassword(cunet_id: String,citizen_id: String): User
        changePassword(cunet_id: String, password: String,original_password: String): User
        addUserInfo(input: UserInfoInput): UserInfo

        addStudentData(input: StudentDataInput): StudentData

        addSubject(input: SubjectScheduleInput): SubjectSchedule
    }
`);

export default schema;
