const express = require('express');

const route = express.Router(); //Aqui minha constante route guarda todas as funcionalidades de router que o Express tem

route.get('/', (req, res) => res.render("index")); //Como resposta a requisição, iremos renderizar(ou seja, mostrar na tela) o nosso index
route.get('/room', (req, res) => res.render("room"));
route.get('/create-pass', (req,res) => res.render("create-pass"));


module.exports = route; //exportanto essa cost para ser importada dentro do server

