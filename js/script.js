

// Funzione per generare la griglia al click dell'utente
function generateGrid() {
   

    // Seleziona l'elemento con id "grid"
    const gridElement = document.querySelector("#grid");
    // Seleziona l'elemento con id "result"
    const resultElement = document.querySelector("#result");

    // Seleziona l'elemento con id "difficulty"
    const selectElement = document.querySelector("#difficulty");
     
     // tiene traccia del numero di celle sicure 
     let safe;

    // Inizializza il conteggio delle celle sicure
    safe = 0;

    // Determina il numero di celle in base alla difficoltà selezionata
    let cellNumber;

    // Imposta la classe della griglia in base alla difficoltà selezionata e rimuove le altre classi della griglia
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

    // Resetta la griglia
    gridElement.innerHTML = "";

    // Itera per creare le celle della griglia
    for (let i = 0; i < cellNumber; i++) {
        const newElement = document.createElement("div");
        newElement.classList.add("square");

        // Decide casualmente se questa cella deve contenere una bomba
        if (Math.random() < 0.2) { // 20% di probabilità di inserire una bomba
            newElement.innerHTML = '<i id="bomb" class="fa fa-regular fa-bomb"></i>';
        } else {
            newElement.textContent = randomNumbers(selectElement); // Inserisce un numero casuale nella cella
            safe++; // Incrementa il conteggio delle celle sicure
        }

        // Aggiungi un event listener per gestire il click dell'utente
        newElement.addEventListener("click", function() {
            // Se questa cella contiene una bomba
            if (this.querySelector(".fa-bomb")) {
                // Cambia il colore della cella in rosso
                this.style.backgroundColor = "red";
                // Aggiorna il risultato
                document.getElementById("result").innerHTML = "Hai perso!";
                resultElement.classList.add("lose");
            } else {
                // Se non contiene una bomba, cambia il colore della cella in azzurro
                this.style.backgroundColor = "lightblue";
                safe--; // Decrementa il conteggio delle celle sicure
                // Se tutte le celle sicure sono state cliccate
                if (safe == 0) {
                    // Aggiorna il risultato
                    document.getElementById("result").innerHTML = "Hai vinto!";
                    resultElement.classList.add("win");
                }
            }
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
