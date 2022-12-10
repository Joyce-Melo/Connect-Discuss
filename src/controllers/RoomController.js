const Database = require("../db/config")

module.exports = {
    async create(req, res){

        const db = await Database()
        const pass = req.body.password
        let roomId

        for(let i = 0; i < 6; i++){ //Se o número for igual a zero, ele atribui a esse roomId um número aleatório, se for diferente de 0 ele concatena com um número aleátorio
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() : roomId += Math.floor(Math.random() * 10).toString(); //Essa linha gera 1 único número, como queremos uma sequencia de 6, colocaremos isso dentro de um for
        } //o to String transformara o número random gerado para string o que irá permitir que o += concatene ao invés de somar os números

        

       await db.run(`INSERT INTO rooms (
        id,
        pass
       ) VALUES (
        ${parseInt(roomId)},
        ${pass}
       )`)

        await db.close()

        res.redirect(`/room/${roomId}`)
    }
}