-- Create custom types
CREATE TABLE IF NOT EXISTS donor
(
    id bigserial NOT NULL PRIMARY KEY,
    password text NOT NULL,
    fullName varchar(100) NOT NULL,
    birthDate date NULL,
    phoneNumber varchar(13) NOT NULL UNIQUE,
    email varchar(320) NOT NULL UNIQUE,
    bloodType smallint NULL
);

CREATE TABLE IF NOT EXISTS donation
(
    id bigserial NOT NULL PRIMARY KEY,
    donorId bigint NOT NULL,
    centerId bigint NOT NULL,
    recipientId bigint NOT NULL,
    bloodType smallint NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT NOW(),
    finished boolean NOT NULL DEFAULT false
);

CREATE TABLE IF NOT EXISTS blood_center
(
    id bigserial NOT NULL PRIMARY KEY,
    name varchar(100) NOT NULL,
    address varchar(100) NOT NULL,
    bloodBankId bigint NOT NULL
);

CREATE TABLE IF NOT EXISTS blood_bank
(
    id bigserial NOT NULL PRIMARY KEY,
    bankInfo json NOT NULL
);

CREATE TABLE IF NOT EXISTS recepient
(
    id bigserial NOT NULL PRIMARY KEY,
    centerId bigint NOT NULL,
    age bigint NOT NULL,
    disease varchar(64) NOT NULL,
    diseaseDesc varchar(256) NOT NULL,
    bloodType smallint NOT NULL,
    donationsNeeded smallint NOT NULL
);
