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

$array = [];

switch ($methode) {
    case 'GET':
        /*if ($dateiname == NULL) { // Verzeichnis auflisten
            foreach (scandir('files/') as $datei) {
                if (substr($datei, -strlen(".txt")) == ".txt")
                    echo ("<a href='$datei'> $datei</a><br>");
            }
        } else*/
        $sql = "
        SELECT
        *
        FROM surveys
        WHERE id = 1
    ";
        $db_erg = mysqli_query($db_link, $sql); //ist ein array

        while ($row = $db_erg->fetch_assoc()) {
            $backslash = '\\';
            $rawsurveydata = $row['survey'];
            $surveydatareplaced = str_replace("\\", "", $row['survey']);
            $surveydata = stripcslashes($row['survey']);
            $versuchtausend = preg_replace('/\\\\\"/', "\"", $row['survey']);
            $fuenf = json_encode($row['survey'], JSON_UNESCAPED_SLASHES);
            $sechs = preg_replace('/\\\"/', "\"", $row['survey']);
            $sieben = json_decode($row['survey'], JSON_UNESCAPED_SLASHES);
            $acht = json_decode($row['survey'], true, JSON_UNESCAPED_SLASHES);
            $jsontophp = json_decode($row['survey'], true, 3);
            array_push($array, "{'key':" . $row['id'] . ", 'value':" . $rawsurveydata . "}");
        }
        //echo "json_encode(array)";

        //echo $array;
        echo json_encode($array);
        //echo json_encode($array, JSON_UNESCAPED_SLASHES);
        //echo "rawsurveydata:";
        //echo $rawsurveydata;
        //echo "surveydata: / stripclashes";
        //echo $surveydata;





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