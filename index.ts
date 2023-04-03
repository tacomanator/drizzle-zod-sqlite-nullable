import { createInsertSchema } from "drizzle-zod";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const Person = sqliteTable("Person", {
  name: text("name").notNull(),
  nickname: text("name"),
});

export const schema = createInsertSchema(Person);

console.log(schema.parse({ name: "hi", nickname: null }));

type PersonType = Zod.infer<typeof schema>;
