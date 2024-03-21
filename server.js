/* Criando serivdor para a pagina html sobre minha pessoa */
const express = require('express');
const app = express();
const path = require('path'); // Importando o módulo 'path'
const PORT = 3000;

// Defininido a pasta 'public' como o diretório estático e informando a rota do arquivo html
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'caio.html'));
});
// Iniciando o servidor na porta 3000 que defini
app.listen(PORT, () => { console.log(`Servidor rodando em http://localhost:${PORT}`); });
/*
    EXECUÇÃO
    -> no terminal informar os seguintes codigos:
        codigo 1: npm install repl
            esperar instalar com sucesso
        codigo 2: npm install express
            esperar instalar com sucesso
        codigo 3: node server.js
            servidor comecara a ser rodado
*/