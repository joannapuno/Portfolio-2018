<?php
require_once 'lib/SendGrid.php';
require_once 'lib/Unirest.php';
SendGrid::register_autoloader();
// <sendgrid_username>,<sendgrid_password> should be replaced with the SendGrid credentials
$sendgrid_username = 'joannapuno';
$sendgrid_password = 'P0k3mon0909';
// update the <from_address> with your email address
$from_email = "j.puno0909@gmail.com";
if ($_SERVER['REQUEST_METHOD'] == 'POST') 
{
  // get values from form
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  // make a secure connection to SendGrid
  $sendgrid = new SendGrid($sendgrid_username, $sendgrid_password);
  $mail     = new SendGrid\Email();
  $mail->addTo($name)->
    setFrom($from_email)->
    setEmail($email)->
    setMessage($message);
  # use the Web API to send your message
  $response = $sendgrid->web->send($mail);
  # check request response
  if ($response->message == 'success')
  {
    $message = "Email sent successfully";
    $status = ' success';
    $name = '';
    $email = '';
    $message = '';
  }
  else
  {
    $errorMessage = "Email not sent - " . $response->errors[0];
    $status = ' error';
  }
}
?>