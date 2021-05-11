

document.querySelectorAll('#write').forEach(div => {
    div.addEventListener('click', () => {
        alert("Da das eine Beta Version von SmartForm ist, kommst du hier leider nicht weiter. Mit dem Stift-Symbol könntest du deine erstellte Umfrage weiter bearbeiten.");
    });
});

document.querySelectorAll('#share').forEach(div => {
    div.addEventListener('click', () => {
        alert("Da das eine Beta Version von SmartForm ist, kommst du hier leider nicht weiter. Mit dem Teilen-Symbol könntest du deine Umfrage versenden.");
    });
});

document.querySelectorAll('#bar').forEach(div => {
    div.addEventListener('click', () => {
        alert("Da das eine Beta Version von SmartForm ist, kommst du hier leider nicht weiter. Mit dem Statistik-Symbol könntest du die Antworten deiner Umfragen einsehen.");
    });
});
document.querySelector("#bild").addEventListener("click", function(){
    alert("Da das eine Beta Version von SmartForm ist, kommst du hier leider nicht weiter. Hier könntest du dein Profilbild bearbeiten.")
})
document.querySelector("#daten").addEventListener("click", function(){
    alert("Da das eine Beta Version von SmartForm ist, kommst du hier leider nicht weiter. Hier könntest du dein Profildaten bearbeiten.")
})