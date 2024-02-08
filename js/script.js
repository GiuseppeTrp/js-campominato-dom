// Funzione per generare la griglia al click dell'utente
function generateGrid() {
    // Seleziona l'elemento con id "grid"
    const gridElement = document.querySelector("#grid");

    // Seleziona l'elemento con id "difficulty"
    const selectElement = document.querySelector("#difficulty");

    // Determina il numero di celle in base alla difficoltà selezionata
    let cellNumber;
    // Imposta la classe della griglia in base alla difficoltà selezionata e rimuove le altre classi della griglia
    if (selectElement.value === "extreme") {
        cellNumber = 49;
        gridElement.classList.add("grid-7x7"); // Imposta la classe per una griglia 7x7
        gridElement.classList.remove("grid-9x9", "grid"); // Rimuove altre classi della griglia
    } else if (selectElement.value === "normal") {
        cellNumber = 81;
        gridElement.classList.add("grid-9x9"); // Imposta la classe per una griglia 9x9
        gridElement.classList.remove("grid-7x7", "grid"); // Rimuove altre classi della griglia
    } else {
        cellNumber = 100;
        gridElement.classList.add("grid"); // Imposta la classe per una griglia normale (10x10)
        gridElement.classList.remove("grid-9x9", "grid-7x7"); // Rimuove altre classi della griglia
    }

    // Resetta la griglia
    gridElement.innerHTML = "";

    // Itera per creare le celle della griglia
    for (let i = 0; i < cellNumber; i++) {
        const newElement = document.createElement("div");
        newElement.classList.add("square"); // Aggiunge la classe per ogni cella della griglia
    
        // Decide casualmente se questa cella deve contenere una bomba
        if (Math.random() < 0.2) { // 20% di probabilità di inserire una bomba
            newElement.innerHTML =  '<i id="bomb" class="fa fa-regular fa-bomb"></i>'; // Inserisce un'icona bomba
        } else {
            newElement.textContent = randomNumbers(selectElement); // Inserisce un numero casuale nella cella
        }
    
        // listener per colorare la cella al click dell'utente
        newElement.addEventListener("click", function() {
            this.style.backgroundColor = "lightblue"; // Cambia il colore della cella al click
            console.log("Cella cliccata: " + this.textContent);
        });
    
        // Aggiunge il div creato a #grid
        gridElement.appendChild(newElement);
    }
    
}

// Funzione per generare numeri casuali in base alla difficoltà
function randomNumbers(selectElement) {
    if (selectElement.value === "extreme") {
        return Math.floor(Math.random() * 49) + 1;
    } else if (selectElement.value === "normal") {
        return Math.floor(Math.random() * 81) + 1;
    } else {
        return Math.floor(Math.random() * 100) + 1;
    }
}

// Event listener al pulsante #start che chiama la funzione generateGrid() al click dell utente
document.getElementById("start").addEventListener("click", generateGrid);
