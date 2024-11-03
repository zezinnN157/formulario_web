
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));


app.post('/submit-form', (req, res) => {

    const { nome, email, mensagem } = req.body;

    
    console.log(`Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`);

    
    res.send('Dados recebidos com sucesso!');
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
