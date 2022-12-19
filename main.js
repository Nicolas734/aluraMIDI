function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);

    if (elemento != null && elemento.localName === "audio"){
        elemento.play()
    }else{
        console.log("Elemento não encontrado")
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];

    tecla.onclick = function (){
        tocaSom(`#som_${instrumento}`);
    }

    tecla.onkeydown = function (evento){
        if(evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add("ativa");
        }
    }

    tecla.onkeyup = function (evento){
        if(evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.remove("ativa");
        }
    }
}
