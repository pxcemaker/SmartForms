<?php
$methode = $_SERVER['REQUEST_METHOD'];
$req = explode('/', trim($_SERVER['PATH_INFO'], '/'));
$dateiname = isset($req[0]) && !empty($req[0]) ?
    $req[0] : NULL;
$daten = file_get_contents('php://input');

switch ($methode) {
    case 'GET':
        if ($dateiname == NULL) { // Verzeichnis auflisten
            foreach (scandir('files/') as $datei) {
                if (substr($datei, -strlen(".txt")) == ".txt")
                    echo ("<a href='$datei'> $datei</a><br>");
            }
        } else
            echo (file_get_contents('files/' . $dateiname));
        break;
    case 'POST':
        file_put_contents('files/' . $dateiname, $daten);
        break;
    case 'PUT':
        file_put_contents('files/' . $dateiname, $daten, FILE_APPEND);
        break;
    case 'DELETE':
        unlink('files/' . $dateiname);
        break;
}