import { fastify } from 'fastify';
import { databasePostgres } from './models/database.js';

const server = fastify();

const database = new databasePostgres();

server.get('/', async (req, res) => {
    const information = await database.list()

    return res.send(information)
});

server.post('/profile', async (req, res) => {
    const { nome, email, senha } = req.body

    await database.create({
        nome,
        email,
        senha
    })

    return res.status(201).send('Perfil Cadastrado')
});


server.put('/profile/:id', async (req, res) => {
    const profileId = req.params.id
    const { nome, email, senha } = req.body

    await database.update(profileId, {
        nome,
        email,
        senha,
    })

    return res.status(301).send()
});


server.delete('/profile/:id', async (req, res) => {
    const profileId = req.params.id

    await database.delete(profileId)

    return res.status(200).send('Perfil Deletado')
});

server.listen({
    port: 3030
});