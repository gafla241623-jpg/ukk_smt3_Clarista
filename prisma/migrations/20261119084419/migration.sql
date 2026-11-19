/*
  Warnings:

  - A unique constraint covering the columns `[kode_user]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `kode_user` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `kode_user` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_kode_user_key` ON `users`(`kode_user`);
