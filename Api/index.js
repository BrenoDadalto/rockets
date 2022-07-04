const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

// forma de ler json / middlewares
app.use(express.urlencoded({ extended: true, }),);
app.use(express.json());

const userRoutes = require('./routes/UserRoutes');
app.use('/usuario', userRoutes);

// rota inicial / endpoint
app.get('/', (request, response) => {

    response.json({ message: 'Rota de teste' });
});

// Conexão com o banco - nome do banco: rockets - apenas localhost não conecta, necessário colocar o ip
mongoose.connect('mongodb://127.0.0.1:27017/rockets', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('conectou no Mongo');
    })
    .catch((err) => {
        console.log('Erro na conexão do banco');
        console.log(err);
    })

app.listen(5000, () => {
    console.log('Conecatado na porta 5000...');
})