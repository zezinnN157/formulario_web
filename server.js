// Importa o Express e o Body-Parser
const express = require('express');
const bodyParser = require('body-parser');

// Inicializa o app Express
const app = express();
const PORT = 3000;

// Configura o Body-Parser para interpretar dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Configura o Express para servir arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Rota para lidar com o envio do formulário
app.post('/submit-form', (req, res) => {
    // Captura os dados enviados pelo formulário
    const { nome, email, mensagem } = req.body;

    // Exibe os dados no console
    console.log(`Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`);

    // Retorna uma resposta para o navegador
    res.send('Dados recebidos com sucesso!');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
