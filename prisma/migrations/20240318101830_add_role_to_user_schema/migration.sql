-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` ENUM('ADMIN', 'MEMBER') NOT NULL DEFAULT 'MEMBER';
