//A controler é onde fica a regra de negócio
module.exports = { 
    index(req, res){ //onde de fato irá nosso código
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password; //esse último é o nome do iput que está na modal

        console.log(`room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`)

    }
}