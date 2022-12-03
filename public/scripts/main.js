import { Modal } from './modal'

const modal = Modal();


//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check");

//percorrer todos os botões que estão ali dentro
checkButtons.forEach(button => {
    //adicionar a escuta
    button.eventlistener("click", {
        
    })
})

//Pegar quando o marcar como lido for clicado



//Abrir a modal
modal.open()

