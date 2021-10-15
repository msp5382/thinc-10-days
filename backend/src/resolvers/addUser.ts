import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (args: any) => {
  const user = await prisma.user.create({
    data: {
      firstname: args.firstname,
      lastname: args.lastname,
      cunet_id: args.cunet_id,
      password: `<FIRST_PASSWORD>${(Math.random() + 2)
        .toString(36)
        .substring(6)}`,
      citizen_id: args.citizen_id,
    },
  });
  if (user?.password) {
    user.password = user.password.replace("<FIRST_PASSWORD>", "");
  }
  return user;
};
