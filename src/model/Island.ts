import { Faker, faker } from "@faker-js/faker";

export type IslandProps = {
  name: string;
  imageUrl: string;
  desc: string;
};

export class Island implements IslandProps {
  name: string = faker.name.fullName();

  imageUrl: string = faker.image.avatar();

  desc: string = faker.lorem.sentence(15);
}
