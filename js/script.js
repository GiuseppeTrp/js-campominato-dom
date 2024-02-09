// Funzione per generare la griglia al click dell'utente
function generateGrid() {
    // Mostra il contenuto della griglia quando viene generata
    document.getElementById("grid-cont").style.display = "block";

    // Seleziona l'elemento con id "grid"
    const gridElement = document.querySelector("#grid");
    // Seleziona l'elemento con id "result"
    const resultElement = document.querySelector("#result");

    // Pulisce il contenuto precedente del risultato
    resultElement.innerHTML = "";

    // Inizializza una variabile per tenere traccia delle celle sicure
    let safe;

    // Inizializza la variabile per il numero di celle in base alla difficoltà selezionata
    let cellNumber;

    // Controlla la difficoltà selezionata e imposta il numero di celle e le classi CSS di conseguenza
    const selectElement = document.querySelector("#difficulty");
    if (selectElement.value === "extreme") {
        cellNumber = 49;
        gridElement.classList.add("grid-7x7");
        gridElement.classList.remove("grid-9x9", "grid");
    } else if (selectElement.value === "normal") {
        cellNumber = 81;
        gridElement.classList.add("grid-9x9");
        gridElement.classList.remove("grid-7x7", "grid");
    } else {
        cellNumber = 100;
        gridElement.classList.add("grid");
        gridElement.classList.remove("grid-9x9", "grid-7x7");
    }

    // Pulisce il contenuto precedente della griglia
    gridElement.innerHTML = "";

    // Inizializza la variabile di conteggio delle celle sicure
    safe = cellNumber;

    // Ciclo per creare e aggiungere le celle alla griglia
    for (let i = 0; i < cellNumber; i++) {
        const newElement = document.createElement("div");
        newElement.classList.add("square");

        // Aggiunge un evento di click a ogni cella
        newElement.addEventListener("click", function() {
            // Genera casualmente se la cella è una bomba o meno
            if (Math.random() < 0.2) { 
                // Se è una bomba, imposta lo stile e il testo appropriato
                this.style.backgroundColor = "red";
                newElement.innerHTML = '<i id="bomb" class="fa fa-regular fa-bomb"></i>';
                // Aggiorna il risultato e applica la classe "lose" per lo stile
                document.getElementById("result").innerHTML = "Hai perso!";
                resultElement.classList.add("lose");
            } else {
                // Se non è una bomba, imposta lo stile e aggiorna il conteggio delle celle sicure
                this.style.backgroundColor = "lightblue";
                safe--; 
                if (safe == 0) {
                    // Se tutte le celle sicure sono state scoperte, aggiorna il risultato e applica la classe "win" per lo stile
                    document.getElementById("result").innerHTML = "Hai vinto!";
                    resultElement.classList.add("win");
                }
            }

            // Se la cella non è una bomba, imposta il testo con un numero casuale
            if (!this.querySelector(".fa-bomb")) {
                this.textContent = randomNumbers(selectElement);
            }
        });

        // Aggiunge la nuova cella alla griglia
        gridElement.appendChild(newElement);
    }
}

// Funzione per generare numeri casuali in base alla difficoltà selezionata
function randomNumbers(selectElement) {
    if (selectElement.value === "extreme") {
        return Math.floor(Math.random() * 49) + 1;
    } else if (selectElement.value === "normal") {
        return Math.floor(Math.random() * 81) + 1;
    } else {
        return Math.floor(Math.random() * 100) + 1;
    }
}

// Aggiunge un evento di click al pulsante di avvio per generare la griglia
document.getElementById("start").addEventListener("click", generateGrid);
