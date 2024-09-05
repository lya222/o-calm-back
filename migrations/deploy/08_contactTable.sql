-- Création de la table contact - Etape 3 - avant la création du datamapper correspondant 

BEGIN; 

CREATE TABLE IF NOT EXISTS "contact" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL UNIQUE,
    "email"  text NOT NULL UNIQUE,
    "message" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

COMMIT;