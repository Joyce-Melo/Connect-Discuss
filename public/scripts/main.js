import Modal from './modal.js'

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');


//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check");

//percorrer todos os botões que estão ali dentro
checkButtons.forEach(button => { //O objeto pelo qual o forEach passou será guardado nessa variável button
    //adicionar a escuta
    button.addEventListener("click", handleClick)

        /*modalTitle.innerHTML = "Marcar como lida"
        modalDescription.innerHTML = "Tem certeza que deseja marcar como lida?"
        modalButton.innerHTML = "Sim, marcar como lida"
        modalButton.classList.remove('red')
        modalButton.classList.add('blue')*/

        //E aqui diremos para o eventlistener o que queremos fazer quando o evento for acionado
        

    })


const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false)) 

        /*modalTitle.innerHTML = "Excluir Pergunta"
        modalDescription.innerHTML = "Tem certeza que deseja excluir essa pergunta?"
        modalButton.innerHTML = "Sim, desejo excluir"*/


    
    })

    function handleClick(event, check = true){

        const text = check ? "Marcar como lida" : "Excluir"

        modalTitle.innerHTML = `${text} esta pergunta?` //se check = true ele muda o texto para marcar como lido, se check = false ele muda o texto para exlcuir a pergunta
        modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
        modalButton.innerHTML = check ? "Sim, marcar como lida" : "Sim, excluir pergunta"
        modal.open()
    }









