-- Create custom types
CREATE TABLE IF NOT EXISTS donor
(
    id bigserial NOT NULL PRIMARY KEY,
    password text NOT NULL,
    fullname varchar(100) NOT NULL,
    birth_date date NULL,
    phone_number varchar(13) NOT NULL UNIQUE,
    email varchar(320) NOT NULL UNIQUE,
    blood_type smallint NULL
);

CREATE TABLE IF NOT EXISTS donation
(
    id bigserial NOT NULL PRIMARY KEY,
    donor_id bigint NOT NULL,
    center_id bigint NOT NULL,
    recipient_id bigint NOT NULL,
    blood_type smallint NOT NULL,
    donate_date TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS blood_center
(
    id bigserial NOT NULL PRIMARY KEY,
    name varchar(100) NOT NULL,
    address varchar(100) NOT NULL,
    blood_bank_id bigint NOT NULL
);

CREATE TABLE IF NOT EXISTS blood_bank
(
    id bigserial NOT NULL PRIMARY KEY,
    bank_info json NOT NULL
);

CREATE TABLE IF NOT EXISTS recepient
(
    id bigserial NOT NULL PRIMARY KEY,
    center_id bigint NOT NULL,
    age bigint NOT NULL,
    blood_type smallint NOT NULL,
    disease varchar(64) NOT NULL,
    disease_desc varchar(256) NOT NULL,
    donate_date TIMESTAMP NOT NULL DEFAULT NOW()
);
