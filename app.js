let amigos = [];//Array vacio amigos que contiene nombres ingresados

function agregarAmigo() {//Inicia la función agregarAmigo, que se ejecuta cuando el usuario hace clic en el botón Añadir.
    
    const input = document.getElementById("amigo");//Busca en el HTML el campo de texto con id="amigo" y lo guarda en la variable input, .document.getElementById() sirve para acceder a un elemento HTML por su ID.
    
    const nombre = input.value.trim();//Obtiene el texto que escribió el usuario en el campo, .value = el valor dentro del <input>, .trim() = elimina espacios en blanco al inicio y al final (evita nombres vacíos tipo " ")

    // Validación: solo letras, espacios y acentos
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;//Define una expresión regular (regex) que solo acepta letras (mayúsculas y minúsculas), acentos, la ñ y espacios, .^ = inicio del texto, .$ = fin del texto, .[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+ = al menos un carácter válido (letras o espacio)

    if (nombre === "" || !regex.test(nombre)) {//Valida que: El campo no esté vacío (nombre === ""), .El nombre cumpla con el regex (!regex.test(nombre) significa "si NO pasa la prueba").
        
        alert("Por favor ingrese el nombre de un amigo");//Si falla la validación, muestra una alerta al usuario.
        
        input.value = "";//Limpia el campo y pone el cursor ahí de nuevo para que el usuario lo reintente.
        input.focus();

        return;
    }

    // Validación: evitar duplicados (case-insensitive)
    const nombreNormalizado = nombre.toLowerCase();
    const existe = amigos.some(amigo => amigo.toLowerCase() === nombreNormalizado);

    if (existe) {
        alert("Ese nombre ya fue agregado");
        input.value = "";
        input.focus();
        return;
    }

    amigos.push(nombre);//Si el nombre es válido, lo añade al final del arreglo amigos, .Ejemplo: si estaba vacío, ahora ["Ana"], .Si ya tenía ["Ana"] y agregas "Pedro", quedará ["Ana", "Pedro"].

    console.log("Lista actual de amigos:", amigos)

    input.value = ""; // limpiar campo

    mostrarLista();//Llama a la función mostrarLista() (que veremos más abajo) para actualizar en pantalla la lista de amigos, .Luego termina la función agregarAmigo
}

function mostrarLista() {//Aquí empieza la función mostrarLista, que se encarga de mostrar en el HTML los nombres guardados en el array amigos.
    
    const lista = document.getElementById("listaAmigos");//Busca en el HTML el <ul> con id="listaAmigos", donde vamos a colocar los nombres.

    lista.innerHTML = "";//Limpia la lista antes de volver a llenarla, para evitar que se dupliquen los elementos.

    for (let i = 0; i < amigos.length; i++) {//Crea un bucle for que recorre todos los elementos del arreglo amigos, .i va desde 0 hasta amigos.length - 1.
        
        const li = document.createElement("li");//Crea un nuevo elemento <li> en el DOM (lista en HTML).
       
        li.textContent = amigos[i];//Escribe el nombre actual dentro de ese <li>. Ejemplo: si amigos[i] = "Ana", el <li> mostrará "Ana".
       
        
        //lista.appendChild(li);//Inserta ese <li> en la lista <ul>, .Así, cada amigo se muestra como un elemento de lista en pantalla.
    }
}

function sortearAmigo() {

    if (amigos.length === 0) {//Revisa si el array amigos está vacío (sin nombres).
        
        alert("La lista está vacía. Agrega al menos un amigo.");
        
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);//Genera un numero aleatorio entre 0 y 1
    
    const amigoSecreto = amigos[indiceAleatorio];//Obtiene el nombre del array en esa posición aleatoria

    const resultado = document.getElementById("resultado");//Busca en el HTML el <ul> con id="resultado", donde mostraremos el amigo secreto.
   
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;//Escribe dentro de ese <ul> un <li> que muestra el resultado, .Usa template literals (`texto ${variable}`) para insertar el nombre directamente en el HTML.
   
}
