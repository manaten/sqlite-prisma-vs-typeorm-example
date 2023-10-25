import { faker } from "@faker-js/faker/locale/ja";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

try {
  await prisma.user.create({
    data: {
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: faker.number.int({ max: 90, min: 0 }),
    },
  });

  console.log("Loaded users: ", await prisma.user.findMany({}));

  console.log(
    "Loaded older users: ",
    await prisma.user.findMany({
      where: {
        age: {
          gt: 30,
        },
      },
    }),
  );
} finally {
  await prisma.$disconnect();
}
