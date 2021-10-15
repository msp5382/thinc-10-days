import { PrismaClient } from "@prisma/client";
import { Request } from "express";
import getUserId from "../utils/getUserId";
const prisma = new PrismaClient();
export default async (_: any, request: Request) => {
  const { userId } = await getUserId(request);
  console.log(userId);
  const user = await prisma.userInfo.findFirst({
    where: {
      user_id: parseInt(userId),
    },
  });
  return user;
};
