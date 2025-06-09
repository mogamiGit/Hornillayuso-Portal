import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts" ADD COLUMN "start_event_date" timestamp(3) with time zone;
  ALTER TABLE "posts" ADD COLUMN "end_event_date" timestamp(3) with time zone;
  ALTER TABLE "_posts_v" ADD COLUMN "version_start_event_date" timestamp(3) with time zone;
  ALTER TABLE "_posts_v" ADD COLUMN "version_end_event_date" timestamp(3) with time zone;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts" DROP COLUMN IF EXISTS "start_event_date";
  ALTER TABLE "posts" DROP COLUMN IF EXISTS "end_event_date";
  ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "version_start_event_date";
  ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "version_end_event_date";`)
}
