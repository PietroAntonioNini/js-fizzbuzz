

const grigliaElement = document.querySelector("#griglia");

for (let i = 1; i < 99; i++ ) {

    //crea un elemento html
    const newElement = document.createElement("div");

    //assegno una classe square stilizzata nel css
    newElement.className = "square";
    newElement.innerHTML = i;

    //do uno sfondo agli square non colpiti da if 
    newElement.style.backgroundColor = "#1389B2";

    //do delle stilizzazioni in base ai multipli
    if (i % 3 == 0 && i % 5 == 0) {
        //se multiplo sia di 3 che di 5 allora cambio colore di sfondo e testo
        newElement.style.backgroundColor = "#F0466F";
        newElement.innerText = "fizzbuzz";

    } else if (i % 3 == 0) {
        //se multiplo di 3 allora cambio colore di sfondo e testo
        newElement.style.backgroundColor = "#FFD166";
        newElement.innerText = "buzz";

    } else if (i % 5 == 0) {
        //se multiplo di 5 allora cambio colore di sfondo e testo
        newElement.style.backgroundColor = "#0AD6A1";
        newElement.innerText = "fizz";
    }

    //visualizzo l'elemento in pagina dentro l'elemento griglia
    grigliaElement.append(newElement);

}