//Die Teile der Modalbox als Konstanten zugänglich
export const modalBox: HTMLElement | null = document.querySelector("#modalbox");
export const closeModal: HTMLElement | null = document.querySelector("#close");
export const frageInput: HTMLInputElement | null = document.querySelector("#ae-titel");
export const descriptionInput: HTMLInputElement | null = document.querySelector("#ae-beschreibung");
export const saveBtn: HTMLElement | null = document.querySelector("#speichern");


let idCounter: number = 0; //hier muss geschaut werden, ob im LokalStorage bereits Items, damit vorhandene Einträge nicht überschrieben werden 

const fragenContainer = document.getElementById("fragen-container");

//Seiten-Setup implementiert die benötigten Setup-Funktionen
function seitenSetup():void {
    setupAddBtn();

    updateCounter();

    setupModal();
    
    setupStoredItems();
}

//Setup-Funktionen der einzelnen Buttons

function setupAddBtn(): void {
    let addBtns = document.getElementsByClassName("a-button");
    for (let addBtn of addBtns) {
        addBtn.addEventListener("click", toggleDisplayModalBox);
    }
  }
  
  export function setupChangeBtn(): void {
    let changeBtns = document.getElementsByClassName("anpassen-button");
    for (let changeBtn of changeBtns) {
        changeBtn.addEventListener("click", toggleDisplayModalBox);
        changeBtn.addEventListener("click", whichBtn);
        changeBtn.addEventListener("click", showCurrentInputs);
    }
  }
  
  function setupStoredItems(): void {
    for(let i = 0; i < localStorage.length; i++){
        let index: string = i.toString();
        let itemObj = JSON.parse(localStorage.getItem(index) as string);
        createItem(itemObj);
    }
  }


function setupModal(): void {
    setupCloseModal();
    setupSaveBtn();
}

//Diese Funktionen werden im Setup der Modalbox ausgeführt


function setupCloseModal(): void {
    if ( closeModal !== null){
      closeModal.addEventListener("click", toggleDisplayModalBox);
      closeModal.addEventListener("click", deleteInputs);
    }
  }
  
  
  
  function setupSaveBtn(): void {
    if (saveBtn !== null) {
      saveBtn.addEventListener("click", generateListItem);
      saveBtn.addEventListener("click", toggleDisplayModalBox);
      saveBtn.addEventListener("click", deleteInputs);
    }
  }
/*function buildTagButtons() {
    
}*/


//Seiten-Setup wird mit dem initialen Laden ausgeführt
window.addEventListener("load", seitenSetup);



//Die benötigten Properties für das neue Listenelement werden abgefragt und an die Funktion saveListItem übergeben
//addNewList erhält darauf hin die Properties als Objekt zurück und übergibt dieses an createItem
//Die deleteButtons und die Anpassen-Buttons müssen daraufhin neu initialisiert werden, damit auch der neue Delete/Anpassen-Button die jeweiligen Funktionalitäten erhält

export function generateListItem(generatedId: string) {

    const itemFrage: string = collectItemTitle() as string;
    const itemAntwort: string = collectItemDescription() as string;

    let objItem: Object = saveListItem(itemFrage, itemAntwort);

    createItem(objItem);
    
    //console.log(localStorage.length); wurde nur zur Überprüfung der ID benötigt
}

//Der Counter updated sich, damit eine fortlaufende ID für die Listenelemente gewährleistet ist

export function updateCounter(): number {
    idCounter = localStorage.length;
    let updatedCounter: number = idCounter;
    return updatedCounter;
}

//Die einzelnen Properties werden abgefragt und an die Funktion addNewListItem übergeben


function collectItemFrage(): string | undefined {
    if(titleInput !== null){
        let itemFrage: string = titleInput.value;/*prompt("Gib hier den Titel des neuen Listelements ein.");*/
        return itemFrage;
    }
}

function collectItemAntwort(): string | undefined {
    if (descriptionInput !== null) {
        let itemAntwort = descriptionInput.value;/*prompt("Gib hier die Beschreibung des neuen Listelements ein.");*/
        return itemAntwort;
    }
}



//Die Funktion nimmt die Properties entgegen und erzeugt aus diesen ein JSON-Objekt, dass im localStorage gespeichert wird, gibt gleichzeitig aber auch ein JS-Objekt an addNewListItem zurück, die dieses an createItem übergibt
function saveListItem(itemFrage: string | undefined, itemAntwort: string): Object { // Das Objekt wird als [object Object] gelogt https://stackoverflow.com/questions/23805377/localstorage-getitem-logsobject-object/23805458
    let fragenId: number = idCounter+1 as number;
    let obj = {
        "fragenId": fragenId.toString() as string,
        "itemFrage": itemFrage as string,
        "itemAntwort": itemAntwort as string,
    }

    localStorage.setItem(idCounter.toString(), JSON.stringify(obj)); // Hilfe zum LocalStorage https://www.mediaevent.de/javascript/local-storage.html
    //console.log(localStorage.getItem(listenId));

    return obj;
}

//createItem nimmt die Properties aus dem JS-Objekt und füllt damit teilweise die variablen Bereiche im HTML-Baustein. Außerdem werden entsprechende Klassen gesetzt
export function createItem(objItem: any): void {
    let listItemObj = objItem;

    console.log(`Hier würde ein Element erstellt werden:
    Titel: ${objItem.itemFrage}
    Beschreibung: ${objItem.itemAntwort}`);

    const newFrage = document.createElement("div");
    newFrage.classList.add("frage");
    newFrage.innerHTML = `
            <p>Frage ${objItem.fragenId}: ${objItem.itemFrage}</p>
            <p>Antwort: ${objItem.itemAntwort}
    `
    

    if (fragenContainer !== null) {
        fragenContainer.appendChild(newFrage); //div hinzufügen
    }
}


//Modalbox wird sichtbar/unsichtbar
export function toggleDisplayModalBox(): void {
    if (modalBox !== null) {
        modalBox.classList.toggle("inaktiv");
    }
}



//Wird die Modalbx "geschlossen" soll diese automatisch in den Default-Zustand versetzt werden
export function deleteInputs(): void {
    //Evtl. in kleinere Funktionen unterteilen
    deleteInputTitle();
    deleteInputDescription();
}


function deleteInputTitle(): void {
    if (titleInput !== null) {
        titleInput.value = "";
    }
}

function deleteInputDescription(): void {
    if (descriptionInput !== null) {
        descriptionInput.value = "";
    }
}