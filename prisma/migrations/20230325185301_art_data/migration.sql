-- CreateTable
CREATE TABLE `ArtDb` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `like` BOOLEAN NOT NULL DEFAULT false,
    `link` VARCHAR(255) NOT NULL,
    `artName` VARCHAR(255) NOT NULL,
    `artistName` VARCHAR(255) NOT NULL,
    `origin` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
