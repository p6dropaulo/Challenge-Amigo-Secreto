let listaAmigos = []

function adicionarAmigo(){
    let inputNomeAmigo = document.getElementById("amigo")
    let nomeAmigo = inputNomeAmigo.value;
    let listaResultado = document.getElementById("resultado");

    if(nomeAmigo.value === ""){
        alert ("Por favor, insira um nome")
    }else{
        listaAmigos.push(nomeAmigo);
        inputNomeAmigo.value = "";
        atualizarListaAmigos();
        listaResultado.innerHTML = "";
    }
}

function atualizarListaAmigos(){
    let listaExibicao = document.getElementById("listaAmigos");
    listaExibicao.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++){
        let itemListadoAmigo = document.createElement("li");
        itemListadoAmigo.textContent = listaAmigos[i];
        listaExibicao.appendChild(itemListadoAmigo);
    }
}

function sortearAmigo(){
    let listaResultado = document.getElementById("resultado");

    if(listaAmigos.length === 0){
        alert("Lista de amigos vazia. Adicione nomes para sortear");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let nomeSorteado = listaAmigos[indiceAleatorio];

        listaResultado.innerHTML = `Amigo sorteado: ${nomeSorteado}`;

        listaAmigos = [];
        atualizarListaAmigos();
        inputNomeAmigo.value = "";
    }
}