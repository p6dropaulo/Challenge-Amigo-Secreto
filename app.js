let amigos = []

function adicionarAmigo(){
    let campoAmigo = document.getElementById("amigo")
    let amigoDigitado = campoAmigo.value;

    if(campoAmigo.value === ""){
        alert ("Por favor, insira um nome")
    }else{
        amigos.push(amigoDigitado);
        campoAmigo.value = "";
    }
}