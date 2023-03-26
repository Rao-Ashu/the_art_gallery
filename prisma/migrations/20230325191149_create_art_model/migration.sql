/*
  Warnings:

  - Added the required column `date` to the `ArtDb` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `artdb` ADD COLUMN `date` INTEGER NOT NULL;
