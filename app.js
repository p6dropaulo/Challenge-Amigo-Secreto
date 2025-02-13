let listaAmigos = []

function adicionarAmigo(){
    let inputNomeAmigo = document.getElementById("amigo")
    let nomeAmigo = inputNomeAmigo.value;

    if(NomeAmigo.value === ""){
        alert ("Por favor, insira um nome")
    }else{
        listaAmigos.push(nomeAmigo);
        inputNomeAmigo.value = "";
        atualizarListaAmigos();
    }
}

function atualizarListaAmigos(){
    let listaExibicao = document.getElementById("listaAmigos")
    listaExibicao.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let itemListadoAmigo = document.createElement("li");
        itemListadoAmigo.textContent = listaAmigos[i];
        listaExibicaoAmigos.appendChild(itemListadoAmigo);
    }
}