-- CreateTable
CREATE TABLE "Band" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "image" TEXT,

    CONSTRAINT "Band_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BandMember" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "bandId" INTEGER NOT NULL,

    CONSTRAINT "BandMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instrument" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Instrument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BandMemberInstruments" (
    "id" SERIAL NOT NULL,
    "bandMemberId" INTEGER NOT NULL,
    "instrumentId" INTEGER NOT NULL,

    CONSTRAINT "BandMemberInstruments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BandAlbum" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(512) NOT NULL,
    "image" TEXT,
    "bandId" INTEGER NOT NULL,

    CONSTRAINT "BandAlbum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlbumSong" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "lyrics" TEXT,
    "duration" INTEGER,
    "bandAlbumId" INTEGER NOT NULL,

    CONSTRAINT "AlbumSong_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Band_name_key" ON "Band"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Instrument_name_key" ON "Instrument"("name");

-- AddForeignKey
ALTER TABLE "BandMember" ADD CONSTRAINT "BandMember_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BandMemberInstruments" ADD CONSTRAINT "BandMemberInstruments_bandMemberId_fkey" FOREIGN KEY ("bandMemberId") REFERENCES "BandMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BandMemberInstruments" ADD CONSTRAINT "BandMemberInstruments_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BandAlbum" ADD CONSTRAINT "BandAlbum_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumSong" ADD CONSTRAINT "AlbumSong_bandAlbumId_fkey" FOREIGN KEY ("bandAlbumId") REFERENCES "BandAlbum"("id") ON DELETE CASCADE ON UPDATE CASCADE;
