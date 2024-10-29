-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('client', 'admin', 'mentor') NOT NULL DEFAULT 'client';
