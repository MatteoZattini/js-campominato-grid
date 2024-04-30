// mi credo una variabile per richiamare l'id grid
let griglia = document.getElementById("grid")

// creo un ciclo per stampare in pagina i quadrati
for (let i = 1; i <= 100; i++) {

    let square = document.createElement("div");
    square.classList.add("square");
    griglia.append(square);

    // creo un event listener che aggiunga sia il numero che un bg color allo
    // square selezionato
    square.addEventListener("click", function(){
        
        square.innerText = i;
        square.classList.toggle("evidenziata")

    })
}