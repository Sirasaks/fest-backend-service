/*
  Warnings:

  - You are about to drop the `fest_tb` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `fest_tb`;

-- CreateTable
CREATE TABLE `Fest` (
    `festId` INTEGER NOT NULL AUTO_INCREMENT,
    `festName` VARCHAR(191) NOT NULL,
    `festDetail` VARCHAR(191) NOT NULL,
    `festState` VARCHAR(191) NOT NULL,
    `festNumDay` INTEGER NOT NULL,
    `festCost` DOUBLE NOT NULL,
    `userId` INTEGER NOT NULL,
    `festImage` VARCHAR(191) NULL,

    PRIMARY KEY (`festId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
