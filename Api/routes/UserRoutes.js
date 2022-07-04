const router = require('express').Router();
const Usuario = require('../models/Usuario');

// Criação de dados
router.post('/', async (request, response) => {

    // console.log(request.body);
    // request.body
    const { nome, idade } = request.body;

    const usuario = {
        nome,
        idade
    }

    if (!nome) {
        response.status(422).json({ error: 'O nome é obrigatório' });
        return // pra não ficar em loop
    }

    try {
        await Usuario.create(usuario);
        response.status(201).json({ message: 'Usuario criado com sucesso' });
    } catch (error) {
        response.status(500).json({ error: error });
    }
});

// Leitura de multiplos dados
router.get('/', async (request, response) => {
    try {
        const usuario = await Usuario.find();
        response.status(200).json(usuario);
    } catch (error) {
        response.status(500).json({ error: error });
    }
});

// Leitura de dados unicos
router.get('/:id', async (request, response) => {
    const nome = request.params.id;

    try {
        const usuario = await Usuario.findOne({ nome: nome });

        if (!usuario) {
            response.status(422).json({ message: 'O usuário não foi encontrado' });
            return // pra não ficar em loop
        }

        response.status(200).json(usuario);
    } catch (error) {
        response.status(500).json({ error: error });
    }
});

module.exports = router;