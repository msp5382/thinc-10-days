import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (args: any) => {
  const user = await prisma.user.findFirst({
    where: {
      cunet_id: args.cunet_id,
      citizen_id: args.citizen_id,
    },
  });
  if (user?.password?.slice(0, 16) == "<FIRST_PASSWORD>") {
    return {
      password: user.password.replace("<FIRST_PASSWORD>", ""),
      first_password: true,
    };
  } else {
    return {};
  }
};
