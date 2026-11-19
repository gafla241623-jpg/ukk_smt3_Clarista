/*
  Warnings:

  - You are about to alter the column `kode_user` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `kode_user` VARCHAR(20) NOT NULL;
