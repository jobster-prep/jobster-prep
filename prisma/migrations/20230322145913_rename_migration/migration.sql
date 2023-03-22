-- This is an empty migration.
ALTER TABLE "Questions" DROP COLUMN "quesiton",
ADD COLUMN  "question" TEXT NOT NULL;