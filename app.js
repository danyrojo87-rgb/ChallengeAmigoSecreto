let amigos = [];

function agregarAmigo() {
    let ingresaAmigo = document.getElementById("amigo");
    let amigo = ingresaAmigo.value;

    if (amigo === "") {
        alert("Por favor ingresa el nombre de un amigo");
        return;
    }
    
    amigos.push(amigo);
    console.log(amigos);
}
