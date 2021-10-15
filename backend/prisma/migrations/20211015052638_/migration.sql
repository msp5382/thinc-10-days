/*
  Warnings:

  - The `user_id` column on the `UserInfo` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "UserInfo" DROP COLUMN "user_id",
ADD COLUMN     "user_id" INTEGER;
