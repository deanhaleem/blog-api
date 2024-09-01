import { MikroORM } from "@mikro-orm/sqlite";

export async function handler() {
  const orm = await MikroORM.init();
  orm.close();
}
