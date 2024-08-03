-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(200) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `region` VARCHAR(255) NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `iots` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_iot` INTEGER NOT NULL,
    `wind_speed` INTEGER NOT NULL,
    `air_temperature` INTEGER NOT NULL,
    `air_humidity` INTEGER NOT NULL,
    `soil_ph` INTEGER NOT NULL,
    `soil_moisture` INTEGER NOT NULL,
    `soil_temperature` INTEGER NOT NULL,
    `device_status` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sprinklers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_iot` INTEGER NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
