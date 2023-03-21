-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "quesiton" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "topic" TEXT NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);
