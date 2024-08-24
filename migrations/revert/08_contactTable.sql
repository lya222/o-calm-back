-- Revert ocalm:08_contactTable from pg

BEGIN;


ALTER TABLE "contact"

    DROP CONSTRAINT IF EXISTS email_unique;
    DROP CONSTRAINT IF EXISTS name_unique;


COMMIT;
