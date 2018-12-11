<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$from = 'From: jpuno.com'; 
$to = 'j.puno0909@gmail.com'; 
$subject = 'Customer Inquiry';
$body = "From: $name\n E-Mail: $email\n Message:\n $message";

$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html\r\n";
$headers .= 'From: j.puno0909@gmail.com' . "\r\n" .
'Reply-To: j.puno0909@gmail.com' . "\r\n" .
'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);