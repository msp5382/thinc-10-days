import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

const genHash = (pass: string) =>
  new Promise<string>((resolve, reject) => {
    bcrypt.hash(pass, 10, (err: any, hash: string) => {
      if (err) reject(err);
      resolve(hash);
    });
  });
export default async ({
  cunet_id,
  password,
  original_password,
}: {
  cunet_id: string;
  password: string;
  original_password: string;
}) => {
  const foundUser = await prisma.user.findFirst({
    where: { cunet_id: cunet_id },
  });

  if (foundUser?.password == `<FIRST_PASSWORD>${original_password}`) {
    const user = await prisma.user.update({
      where: {
        cunet_id: cunet_id,
      },
      data: {
        password: await genHash(password),
      },
    });
    return user;
  } else {
    throw new Error("Wrong password");
  }
};
