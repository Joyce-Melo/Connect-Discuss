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
    //o event traz consigo o elemento em que ocorreu o evento, além disse ele leva todo o atributo do elemento no qual ocorreu o evento. Por exemplo, se o evento ocorreu no botão excluir, ele vai levar todos os atributos do excluir (que esta dento de um a cuja classe é delete, pegando tudo da classe a)
    function handleClick(event, check = true){

        event.preventDefault(); //Todo link quando clicamos altera a URL, nossos botões de marcar como lido e Excluir não devem alterar a URL, portanto não se comportam conforme um link comum
        //Então colocamos essa função a cima para dizer ao JS que essas tags a não se comportam como um link comum, afinal ela não nos direciona de fato para outra página, apenas abrem uma modal
        const text = check ? "Marcar como lida" : "Excluir"
        const slug = check ? "check" : "delete" //Se nosso slug for true, então slug = check, se não slug se torna delete
        const roomId = document.querySelector("#room-id").dataset.id;
        const questionId = event.target.dataset.id;

        const form = document.querySelector(".modal form");
        form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`); //pasamos o que queremos mudar e pelo que queremos mudar



        modalTitle.innerHTML = `${text} esta pergunta?` //se check = true ele muda o texto para marcar como lido, se check = false ele muda o texto para exlcuir a pergunta
        modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
        modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
        check ? modalButton.classList.remove("red") : modalButton.classList.add("red");
        modal.open()
    }









