// mi credo una variabile per richiamare l'id grid
let griglia = document.getElementById("grid")

// creo un ciclo per stampare in pagina i quadrati
for (let i = 1; i <= 100; i++) {

    // let square = document.createElement("div");
    // square.classList.add("square");
    // griglia.append(square);

    // chiamo la funzione
    let elemento = mySquare(i);

    // creo un event listener che aggiunga sia il numero che un bg color allo
    // square selezionato
    elemento.addEventListener("click", function(){
        
        elemento.innerText = i;
        elemento.classList.toggle("evidenziata")

    })

    griglia.append(elemento);

}

// creo una funzione per la creazione del quadrato
function mySquare (contenuto) {
    let square = document.createElement("div");
    square.classList.add("square");
    return square;
}