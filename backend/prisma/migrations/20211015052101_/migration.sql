/*
  Warnings:

  - The `is_first_time` column on the `UserInfo` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "UserInfo" DROP COLUMN "is_first_time",
ADD COLUMN     "is_first_time" BOOLEAN;
