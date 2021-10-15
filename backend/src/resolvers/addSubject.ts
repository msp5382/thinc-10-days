import { PrismaClient } from "@prisma/client";
import { Request } from "express";
import getUserId from "../utils/getUserId";

const prisma = new PrismaClient();

export default async (args: any, request: Request) => {
  const { userId } = await getUserId(request);
  //need to validate admin permission
  return await prisma.subjectSchedule.create({
    data: { ...args.input },
  });
};
