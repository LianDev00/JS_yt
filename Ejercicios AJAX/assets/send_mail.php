<?php
// echo $_SERVER["HTTP_HOST"];
// ini_set("SMTP", "send_mail.php");
// ini_set("smtp_port", "25");

if (isset($_POST)) {
  error_reporting(0);
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $comments = $_POST["comments"];

  $domain = $_SERVER["HTTP_HOST"];
  $to = "liandev2000@gmail.com";
  $subject = "Contacto desde el formulario del sitio $domain: $subject";
  $message = "
    <p>
    Contacto desde el formulario del sitio <b>$domain</b>
    </p>
    <ul>
      <li>Nombre: <b>$name</b></li>
      <li>Email: <b>$email</b></li>
      <li>Asunto: $subject</li>
      <li>Comentarios: $comments</li>
    </ul>
  ";
  $headers = "MIME-Version: 1.0\r\n" . "Content-type: text/html; chartes:utf-8\r\n" . "From: Envio Automatico No Responder <no reply@$domain>";

  $send_mail = mail($to, $subject, $message, $headers);

  if ($send_mail) {
    $res = [
      "err" => false,
      "message" => "Tus datos han sido enviados",
    ];
  } else {
    $res = [
      "err" => True,
      "message" => "Error al enviar tus datos, intenta nueva mente",
    ];
  }

  header("Access-Control-Allow-Origin: *");
  header('Conten-type: aplication/json');

  echo json_encode($res);
  exit;
}