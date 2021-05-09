<?php
$methode = $_SERVER['REQUEST_METHOD'];
$req = explode('/', trim($_SERVER['PATH_INFO'], '/'));
$dateiname = isset($req[0]) && !empty($req[0]) ?
    $req[0] : NULL;
$daten = file_get_contents('php://input');

define('MYSQL_HOST', 'localhost'); //define — Definiert eine benannte Konstante
/*define('MYSQL_HOST', 'localhost');*/ //hier dann die Daten vom Webserver eintragen
define('MYSQL_USER', 'root');
/*define('MYSQL_USER', 'root');*/ //hier dann die Daten vom Webserver eintragen
define('MYSQL_PASSWORD', 'root'); #wie finde ich das raus?
/*define('MYSQL_PASSWORD', 'root');*/ //hier dann die Daten vom Webserver eintragen
define('MYSQL_DATABASE', 'smartform');
/*define('MYSQL_DATABASE', 'smartform');*/ //hier dann die Daten vom Webserver eintragen

$db_link = mysqli_connect( //mysqli_connect - Opens a connection to the MySQL Server
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
);

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
        $sql = " INSERT INTO surveys ";
        $sql .= " SET "; #was macht das?
        $sql .= " survey   ='" . $daten . "' ";
        $db_erg = mysqli_query($db_link, $sql);
        break;
    case 'PUT':
        file_put_contents('files/' . $dateiname, $daten, FILE_APPEND);
        break;
    case 'DELETE':
        unlink('files/' . $dateiname);
        break;
}