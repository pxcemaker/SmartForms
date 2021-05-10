mySQLErfebnis1 = AbfrageFirmaTabelle
mySQLErfebnis2 = AbfrageLänderTabelle
Länder = []
for Land in mySQLErfebnis2
Länder.push(Land.name)

echo ([
{
"name": mySQLErfebnis1[0].["name"],
"Länder": Länder
}
])



Frageblätter = []
for Frageblatt in mySQLErfebnis2
FrageblattJson = {
"key": Frageblatt["key"],
"answetype": Frageblatt["answertype"] }

Antworten = SELECT antwort from antworten where Frageblatt["key"]
for Antwort in Antworten
AntwortJson = {
"key": Antwort["key"],
"value": Antwort["value"]
}

checkboxantwortzukeyHallo Hallo = [
{
"key": "neu",
"value": "Tschüss"
},
{
"key": "neu",
"value": "Tshcüssifsjdhf"
}
]

//Z.33ff Rohaufbau
frageblätter = [
{
"key": ,
"answetype": ,
//3. Spalte in der Datenbank ist die id des Fragebogens
},
{
"key": "hsjfhskfndj",
"answetype": "radio",
"value": [
{
"key": "neu",
"value": "sknfksflsfkn"
},
{
"key": "antwort2",
"value": "ssgdgsgdg"
},
{
"key": "Blubb",
"value": "dsgdsgsg"
}
]
}
]