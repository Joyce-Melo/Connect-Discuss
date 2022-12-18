//A controler é onde fica a regra de negócio

const Database = require("../db/config");


module.exports = {
    async index(req, res){ //onde de fato irá nosso código
        const db = await Database()
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password; //esse último é o nome do iput que está na modal

        /*Verificar se a senha está correta */
       const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`) //o db.get irá trazer apenas um elemento, password podemos ter mais de uma igual, porém Id Não! Então faremos a validação pelo ID aqui
        if(verifyRoom.pass == password){
            if(action == "delete"){

                await db.run(`DELETE FROM questions WHERE id = ${questionId}`)

            } else if (action == "check"){

                await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)
            }
            res.redirect(`/room/${roomId}`)
        } else {
            res.render('passincorrect', {roomId: roomId})
        }


       
    },

    async create(req, res){
        const db = await Database()
        const question = req.body.question;
        const roomId = req.params.room;

        await db.run(`INSERT INTO questions(
            title,
            room,
            read
        )VALUES(
            "${question}", 
            ${roomId},
            0
        )`)//Quando inserimos um text no banco de dados ele precisa estar entre "" como o questions ali em cima

        res.redirect(`/room/${roomId}`)
    }
}