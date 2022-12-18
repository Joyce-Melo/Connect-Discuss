const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

const route = express.Router(); //Aqui minha constante route guarda todas as funcionalidades de router que o Express tem

route.get('/', (req, res) => res.render("index", {page: 'enter-room'})); //Como resposta a requisição, iremos renderizar(ou seja, mostrar na tela) o nosso index
route.get('/create-pass', (req,res) => res.render("index", {page: 'create-pass'}));

route.get('/room/:room', RoomController.open);
//route.post('/room/323232/2/check'); //Aqui na rota temos que passar o room, que é onde está a pergunta, o ID da Sala em que está a pergunta, o ID da pergunta, e a ação que estamos executando
// Formato que o formulário de dentro da modal tem que passar a informação route.post('/room/:room/:question/:action');//Para usarmos variáveis em rotas, devemos usar o dois pontos (":")
route.post('/create-room', RoomController.create )
route.post('/enterroom', RoomController.enter)//Se estamos enviando algo, então usamos POST, se queremos apenas ler, usamos um GET


route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index);



module.exports = route; //exportanto essa cost para ser importada dentro do server

