const Database = require("../db/config")

    module.exports = {
         async create(req, res){

            const db = await Database()
            const pass = req.body.password
            let roomId
            let isRoom = true

                while(isRoom){

                    //Gera o número da sala
                for(let i = 0; i < 6; i++){ //Se o número for igual a zero, ele atribui a esse roomId um número aleatório, se for diferente de 0 ele concatena com um número aleátorio
                    i == 0 ? roomId = Math.floor(Math.random() * 10).toString() : roomId += Math.floor(Math.random() * 10).toString(); //Essa linha gera 1 único número, como queremos uma sequencia de 6, colocaremos isso dentro de um for
                } //o to String transformara o número random gerado para string o que irá permitir que o += concatene ao invés de somar os números

                
                //Verifica se o número já existe
                //para buscar db.all
            const roomsExistsIds = await db.all(`SELECT id FROM rooms`);
            //Retornará um array, então podemos dar um some, o some verificará se determinada condição é true (no nosso caso se o roomId já existe no bando, se algum der true ele já retorna o true)

            isRoom = roomsExistsIds.some(roomExistId => roomExistId === roomId);


            if (!isRoom){ //se for false, ele insere

                //Insere a sala no banco
                    await db.run (`INSERT INTO rooms (
                        id,
                        pass
                    ) VALUES (
                        ${parseInt(roomId)},
                        "${pass}"
                    )`)
                }

                }
                
                await db.close()

                res.redirect(`/room/${roomId}`)
            },

            async open(req, res){
                const db = await Database()
                const roomId = req.params.room
                const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
                const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
                let isNoQuestions;

                if(questions.length == 0){
                    if(questionsRead ==0){
                        isNoQuestions = true
                    }
                }


                res.render("room", {roomId: roomId, questions: questions, questionsRead, isNoQuestions: isNoQuestions})
            },

            enter(req, res){
               const roomId = req.body.roomId

               res.redirect(`/room/${roomId}`)
            }
    }