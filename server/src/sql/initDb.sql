-- Create custom types
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'blood_type') THEN
        CREATE TYPE blood_type AS ENUM (
            'I-',
            'I+',
            'II-',
            'II+',
            'III-',
            'III+',
            'IV-',
            'IV+'
        );
    END IF;
END$$;

CREATE TABLE IF NOT EXISTS donor
(
    id bigserial not null primary key,
    fullname varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    phone_number varchar(13) NOT NULL,
    blood_type blood_type NULL,
    birth_date TIMESTAMP NULL DEFAULT NOW()
    
);

CREATE TABLE IF NOT EXISTS donation
(
    id bigserial not null primary key,
    donorId bigint not null,
    centerId bigint not null,
    recipientId bigint not null,
    blood_type blood_type NOT NULL,
    birth_date TIMESTAMP NOT NULL DEFAULT NOW(),
);