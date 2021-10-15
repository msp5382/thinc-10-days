import { PrismaClient } from "@prisma/client";
import { Request } from "express";
import getUserId from "../utils/getUserId";

const prisma = new PrismaClient();

export default async (args: any, request: Request) => {
  const { userId } = await getUserId(request);

  return await prisma.userInfo.create({
    data: { ...args.input, user_id: parseInt(userId) },
  });
};
