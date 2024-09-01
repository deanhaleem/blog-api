import { Options, SqliteDriver } from "@mikro-orm/sqlite";

const config: Options = {
  driver: SqliteDriver,
  dbName: "sqlite.db",
  discovery: {
    warnWhenNoEntities: false,
  },
  debug: true,
};

export default config;
