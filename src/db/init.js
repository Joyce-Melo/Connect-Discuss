const Database = require("./config");

const initDb = { //criamos essa const para guardar as funções que estamos passando abaixo
    async init(){
        const db = await Database() 
        //Esse await espera que o resultado dessa chamada de Database retorne. O js roda mais rápido os comandos do que o tempo que realmente leva de busca
        // Pois ele tem que buscar esse Database do arquivo config, que por sua vez tem importação de outros arquivos dentro dele, então o js entra nessas importações também, e vem retornando em cascata
        //Por isso é importante colocar o await, pois é uma forma de garantir que só irá rodar o próximo comando após ter tido obtido de fato o resultado desse
        //Sempre que formos executar um await temos que ter o async, se for usar o await, colocar o async na função acima

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT
        )`);

        await db.close() //Fechando a conexão com o banco
    }
}

initDb.init(); //executando a init