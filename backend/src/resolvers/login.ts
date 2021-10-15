import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

const signJWT = (userId: number) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET_KEY ?? "", {
    expiresIn: "7d",
  });
};

const compareHash = (pass: string, hash: string) =>
  new Promise<boolean>((resolve, reject) => {
    bcrypt.compare(pass, hash, function (err: any, result: boolean) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });

export default async ({
  cunet_id,
  password,
}: {
  cunet_id: string;
  password: string;
}) => {
  const user = await prisma.user.findFirst({
    where: {
      cunet_id: cunet_id,
    },
  });
  if (!user?.password) {
    throw new Error("User not found");
  }
  if (user.password?.includes("<FIRST_PASSWORD>")) {
    if (password == user.password?.replace("<FIRST_PASSWORD>", "")) {
      return {
        token: signJWT(user.id),
      };
    } else {
      throw new Error("Wrong password");
    }
  } else if (await compareHash(password, user?.password)) {
    return {
      token: signJWT(user.id),
    };
  } else {
    throw new Error("Wrong password");
  }
};
