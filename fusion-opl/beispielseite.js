//Die Teile der Modalbox als Konstanten zugänglich
const modalBox = document.querySelector("#modalbox");
const closeModal = document.querySelector("#close");
const titleInput = document.querySelector("#ae-titel");
const descriptionInput = document.querySelector("#ae-beschreibung");
const saveBtn = document.querySelector("#speichern");

let idCounter = 0; //hier muss geschaut werden, ob im LokalStorage bereits Items, damit vorhandene Einträge nicht überschrieben werden 

const fragenContainer = document.getElementById("fragen-container");

//Seiten-Setup implementiert die benötigten Setup-Funktionen
function seitenSetup() {
    setupAddBtn();

    updateCounter();

    setupModal();
    
    setupStoredItems();
}

//Setup-Funktionen der einzelnen Buttons

function setupAddBtn() {
    let addBtns = document.getElementsByClassName("a-button");
    for (addBtn of addBtns) {
        addBtn.addEventListener("click", toggleDisplayModalBox);
    }
}


function setupModal() {
    setupCloseModal();
    setupSaveBtn();
}

//Diese Funktionen werden im Setup der Modalbox ausgeführt
function setupCloseModal() {
    closeModal.addEventListener("click", toggleDisplayModalBox);
    closeModal.addEventListener("click", deleteInputs);
}


function setupSaveBtn() {
    saveBtn.addEventListener("click", generateListItem);
    saveBtn.addEventListener("click", toggleDisplayModalBox);
    saveBtn.addEventListener("click", deleteInputs);
}

function setupStoredItems() {
    for(i = 0; i < localStorage.length; i++){
        let itemObj = JSON.parse(localStorage.getItem(i));
        createItem(itemObj);
    }
}

/*function buildTagButtons() {
    
}*/


//Seiten-Setup wird mit dem initialen Laden ausgeführt
window.addEventListener("load", seitenSetup);



//Die benötigten Properties für das neue Listenelement werden abgefragt und an die Funktion saveListItem übergeben
//addNewList erhält darauf hin die Properties als Objekt zurück und übergibt dieses an createItem
//Die deleteButtons und die Anpassen-Buttons müssen daraufhin neu initialisiert werden, damit auch der neue Delete/Anpassen-Button die jeweiligen Funktionalitäten erhält

function generateListItem() {

    const itemFrage = collectitemFrage();
    const itemAntwort = collectitemAntwort();

    objItem = saveListItem(itemFrage, itemAntwort);

    createItem(objItem);
    
    //console.log(localStorage.length); wurde nur zur Überprüfung der ID benötigt
}

//Der Counter updated sich, damit eine fortlaufende ID für die Listenelemente gewährleistet ist
function updateCounter() {
    idCounter = localStorage.length;
    let updatedCounter = idCounter;
    return updatedCounter;
}

//Die einzelnen Properties werden abgefragt und an die Funktion addNewListItem übergeben

function collectitemFrage() {
    let itemFrage = titleInput.value;/*prompt("Gib hier den Titel des neuen Listelements ein.");*/
    return itemFrage;
}

function collectitemAntwort() {
    let itemAntwort = descriptionInput.value;/*prompt("Gib hier die Beschreibung des neuen Listelements ein.");*/
    return itemAntwort;
}



//Die Funktion nimmt die Properties entgegen und erzeugt aus diesen ein JSON-Objekt, dass im localStorage gespeichert wird, gibt gleichzeitig aber auch ein JS-Objekt an addNewListItem zurück, die dieses an createItem übergibt
function saveListItem( itemFrage, itemAntwort ) { // Das Objekt wird als [object Object] gelogt https://stackoverflow.com/questions/23805377/localstorage-getitem-logsobject-object/23805458
    updateCounter();

    let obj = {
        "fragenId": idCounter+1,
        "itemFrage": itemFrage,
        "itemAntwort": itemAntwort
    }

    localStorage.setItem(idCounter, JSON.stringify(obj)); // Hilfe zum LocalStorage https://www.mediaevent.de/javascript/local-storage.html
    //console.log(localStorage.getItem(listenId));

    return obj;
}

//createItem nimmt die Properties aus dem JS-Objekt und füllt damit teilweise die variablen Bereiche im HTML-Baustein. Außerdem werden entsprechende Klassen gesetzt
function createItem(objItem) {
    console.log(`Hier würde ein Element erstellt werden:
    Titel: ${objItem.itemFrage}
    Beschreibung: ${objItem.itemAntwort}`);

    const newFrage = document.createElement("div");
    newFrage.classList.add("frage");
    newFrage.innerHTML = `
            <p>Frage ${objItem.fragenId}: ${objItem.itemFrage}</p>
            <p>Antwort: ${objItem.itemAntwort}
    `

 
    fragenContainer.appendChild(newFrage); //div hinzufügen
}


//Modalbox wird sichtbar/unsichtbar
function toggleDisplayModalBox() {
    modalBox.classList.toggle("inaktiv");

}

//Wird die Modalbx "geschlossen" soll diese automatisch in den Default-Zustand versetzt werden
function deleteInputs() {
    //Evtl. in kleinere Funktionen unterteilen
    deleteInputTitle();
    deleteInputDescription();

}

function deleteInputTitle() {
    titleInput.value = "";
}

function deleteInputDescription() {
    descriptionInput.value = "";
}


