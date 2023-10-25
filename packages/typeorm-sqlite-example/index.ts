import { faker } from "@faker-js/faker/locale/ja";
import { MoreThan } from "typeorm";

import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

await AppDataSource.initialize();
console.log("Inserting a new user into the database...");

const user = new User({
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  age: faker.number.int({ max: 90, min: 0 }),
});

await AppDataSource.manager.save(user);
console.log("Saved a new user with id: " + user.id);

console.log("Loaded users: ", await AppDataSource.getRepository(User).find());

console.log(
  "Loaded older users: ",
  await AppDataSource.getRepository(User).findBy({
    age: MoreThan(30),
  }),
);
