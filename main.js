let myButton = document.getElementById("bottone")
let select = document.querySelector("select")
let griglia = document.getElementById("grid")
let grigliaMedium = document.getElementById("gridmedium")
let grigliaHard = document.getElementById("gridhard")

// myButton.addEventListener("click", function(){

//     // mi creo una variabile per richiamare l'id grid
//     let griglia = document.getElementById("grid")
    
//     // creo un ciclo per stampare in pagina i quadrati
//     for (let i = 1; i <= 100; i++) {
    
//         // let square = document.createElement("div");
//         // square.classList.add("square");
//         // griglia.append(square);
    
//         // chiamo la funzione
//         let quadrato = mySquare(i);
    
//         // creo un event listener che aggiunga sia il numero che un bg color allo
//         // square selezionato
       
    
//         griglia.append(quadrato);
    
//     }
    
//     // creo una funzione per la creazione del quadrato
//     function mySquare (contenuto) {
//         let square = document.createElement("div");
//         square.classList.add("square");
    
//         square.addEventListener("click", function(){
            
//             square.innerText = contenuto;
//             square.classList.toggle("evidenziata")
    
//         })
    
//         return square;
//     }
// })


// *************************************************************
// super bonus

select.addEventListener("change", function(){
    // for (let i = 1; i <= 100; i++) {
    //     let quadrato = mySquare(i);
    //     griglia.append(quadrato);   
    // }
})

myButton.addEventListener("click", function(){
    triggerChange(select);
    if (select.value == "easy") {
        for (let i = 1; i <= 100; i++) {
            let quadrato = mySquare(i);
            griglia.append(quadrato);   
        }
    } else if (select.value == "medium") {
        for (let i = 1; i <= 81; i++) {
            let quadrato = mySquare(i);
            grigliaMedium.append(quadrato);   
        }
    } else if (select.value == "hard") {
        for (let i = 1; i <= 49; i++) {
            let quadrato = mySquare(i);
            grigliaHard.append(quadrato);   
        }
    }
})



function triggerChange (element){
    let changeEvent = new Event('change')
    element.dispatchEvent(changeEvent)
}

function mySquare (contenuto) {
    let square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("click", function(){
        
        square.innerText = contenuto;
        square.classList.toggle("evidenziata")

    })

    return square;
}



