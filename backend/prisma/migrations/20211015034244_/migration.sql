-- CreateTable
CREATE TABLE "UserInfo" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT,
    "prefix" TEXT,
    "birthday" TEXT,
    "blood_group" TEXT,
    "nationality" TEXT,
    "race" TEXT,
    "disibility" TEXT,
    "tel" TEXT,
    "email" TEXT,
    "school" TEXT,
    "study_plan" TEXT,
    "gpax" TEXT,
    "entrace_way" TEXT,
    "is_first_time" TEXT,

    CONSTRAINT "UserInfo_pkey" PRIMARY KEY ("id")
);
