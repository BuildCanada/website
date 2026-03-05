import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

export function getDb(connectionString: string) {
  const pool = new Pool({ connectionString, maxUses: 1 });
  return drizzle({ client: pool });
}

export type Db = ReturnType<typeof getDb>;
