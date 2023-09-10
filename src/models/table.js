import { sql } from "../database/db.js";

// sql`DROP TABLE usuarios`.then(() => {
//   console.log('Tabela Deletada')
// });

sql`
  CREATE TABLE usuarios (
    id      TEXT          PRIMARY KEY,
    nome    VARCHAR(255)  NOT NULL,
    email   VARCHAR(255)  UNIQUE NOT NULL,
    senha   VARCHAR(255)  NOT NULL
  );
`.then(() => {
  console.log('Tabela Criada')
});