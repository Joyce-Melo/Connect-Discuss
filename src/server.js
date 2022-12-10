//Responsável por iniciar o servidor
const express = require('express');
const route = require('./route'); //como estamos importanto um arquivo que eu criei, é necessário colocar o ./ que indica o caminho
const path = require('path'); //modulo


const server = express(); //Iniciando o express, executando ele e guardando no server

server.set('view engine', 'ejs'); //Aqui estamos dizendo ao express que nossa view engine (resposável pela view) é o modulo ejs

server.use(express.static("public")); //Aqui estamos pedindo para que o express use/reconheça o conteúdo estatico em public


server.set('views', path.join(__dirname, 'views')); //Aqui estou especificando onde fica a pasta view, pois por padrão o node espera que ela esteja fora do src, mas aqui no nosso projeto ela está dentro
//O path pega o caminho da pasta onde está o nosso projeto, o join junta, pega o dirname que é a pasta onde está esse arquivo em que chamamos o join, ou seja, aqui o __dirname = src

server.use(express.urlencoded({extended: true})); //Isso é uma configuração de middleware, o middleware faz a intermediação entre o que vem para a rota e para onde a rosta está sendo mandada. Ps: sempre posicionar a config de middleware antes da rota

server.use(route); //Aqui nós começamos a usar de fato o arquivo route


server.listen(3000, () => console.log("RODANDO")); //listen - funcionalidade de dentro do express

