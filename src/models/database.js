import { randomUUID } from 'node:crypto';
import { sql } from '../database/db.js';

export class databasePostgres {
    // Lista os Perfil Criados
    async list() {
        const profile = await sql`SELECT * FROM usuarios`

        return profile
    };

    // Cria o Perfil
    async create(profile) {
        const profileId = randomUUID()
        const { nome, email, senha } = profile

        await sql`INSERT INTO usuarios (id, nome, email, senha) VALUES (${profileId}, ${nome}, ${email}, ${senha})`
    };

    // Modifica Informações do Perfil
    async update(id, profile) {
        const { nome, email, senha } = profile

        await sql`UPDATE usuarios SET nome = ${nome}, email = ${email}, senha = ${senha} WHERE id = ${id}`
    };

    // Deleta o Perfil
    async delete(id) {
        await sql`DELETE FROM usuarios WHERE id = ${id}`
    };
};