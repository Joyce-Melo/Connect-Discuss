const sqlite3 = require("sqlite3");
const { open } = require("sqlite"); // quando passamos dessa forma, o js irá dentro do sqlite procurará o módulo de nome "open" e trará somente esse modulo, diferentemente do que acontece na linha acima na qual estamos trazendo todos os módulos de sqlite3

module.exports = () =>
    open({
            
        filename: './src/db/rocketq.sqlite', //caminho do nosso banco de dados
        driver: sqlite3.Database, //quem comanda o banco de dados

    });

