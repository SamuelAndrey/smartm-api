-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "region" VARCHAR(255),
    "role" "Role" NOT NULL DEFAULT 'USER',
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "iots" (
    "id" SERIAL NOT NULL,
    "id_iot" INTEGER NOT NULL,
    "wind_speed" INTEGER NOT NULL,
    "air_temperature" INTEGER NOT NULL,
    "air_humidity" INTEGER NOT NULL,
    "soil_ph" INTEGER NOT NULL,
    "soil_moisture" INTEGER NOT NULL,
    "soil_temperature" INTEGER NOT NULL,
    "device_status" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "iots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sprinkles" (
    "id" SERIAL NOT NULL,
    "id_iot" INTEGER,
    "is_active" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "sprinkles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
