//A controler é onde fica a regra de negócio

const Database = require("../db/config");


module.exports = {
    index(req, res){ //onde de fato irá nosso código
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password; //esse último é o nome do iput que está na modal

        console.log(`room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`)

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