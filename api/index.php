<?php
require __DIR__ . '/libs/PHPMailer/Exception.php';
require __DIR__ . '/libs/PHPMailer/PHPMailer.php';
require __DIR__ . '/libs/PHPMailer/SMTP.php';
use PHPMailer\PHPMailer\PHPMailer;

ini_set('display_errors', '1');
header('Content-Type: application/json');
header('content-type: application/json');
header("Access-Control-Allow-Methods: POST");
$origin = $_SERVER['HTTP_ORIGIN'] ? $_SERVER['HTTP_ORIGIN'] : '*';
header("Access-Control-Allow-Origin: {$origin}");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, content-type, Access-Control-Request-Method, Access-Control-Request-Headers");

class API
{
    public function sendBugReport()
    {
        $errors = [];
        $entityBody = file_get_contents('php://input');
        $body = json_decode(urldecode($entityBody), true);
        $_RETURN = true;
        $error_type = "";
        $message = "";
        $marker_string = "";
        if (empty($body["error_type"])) {
            $_RETURN = false;
            $errors["error_type"] = "Je moet een error speciferen";
        }

        if ($_RETURN) {
            $email = new PHPMailer();
            try {
                $error_type = htmlspecialchars($body["error_type"]);
                $marker_string = htmlspecialchars($body["marker_string"]);
                if (!empty($body["message"])) {
                    $message = nl2br(htmlspecialchars($body["message"]));
                }
                $email->SetFrom('bugreport@mementowoordfestival.be', 'Memento Affiches - Probleem melding'); //Name is optional
                $email->Subject = 'Probleem melding mementowoordfestival affiches (' . $error_type . ')';
                $email->Body = <<<body
                    <h2>Probleem gemeld:</h2>
                    <p><b>Locatie:</b> {$marker_string}</p>
                    <p><b>Type:</b> {$error_type}</p>
body;
                if ($message != "") {
                    $email->Body .= "<p><b>Bericht:</b> {$message}</p>";
                }
                // $email->AddAddress('info.amantnv@gmail.com');
                $email->AddAddress('sam.amant@student.howest.be');
                $email->IsHTML(true);
                $email->send();
                $response["success"] = true;
                $response["message"] = "Bug reported";
                $response["request"] = $body;
                echo json_encode($response);
            } catch (Exception $e) {
                $response["request"] = $body;
                $errors["general"] = $e;
                $response["errors"] = $errors;
                echo json_encode($response);
            }
        } else {
            $response["request"] = $body;
            $response["errors"] = $errors;
            echo json_encode($response);
        }
    }
}

$class = new API();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    switch ($_REQUEST['do']) {
        case 'bug-report':
            $class->sendBugReport();
            break;
        default:
            $response["success"] = false;
            echo (json_encode($response));
            break;
    }
}
