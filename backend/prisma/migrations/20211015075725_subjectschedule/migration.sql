-- CreateTable
CREATE TABLE "SubjectSchedule" (
    "id" SERIAL NOT NULL,
    "day" TEXT,
    "start_time" TEXT,
    "stop_time" TEXT,
    "section" INTEGER,
    "teacher" TEXT,
    "code" TEXT,
    "name" TEXT,
    "credit" INTEGER,
    "tag" TEXT[],

    CONSTRAINT "SubjectSchedule_pkey" PRIMARY KEY ("id")
);
