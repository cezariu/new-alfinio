<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$numar_adulti = $_POST['adults'];
$numar_copii = $_POST['children'];
$check_in = $_POST['checkin'];
$check_out = $_POST['checkout'];

$telefon = $_POST['tel'];

$message = $_POST['message'];

//Validate first
if(empty($name)||empty($visitor_email)) 
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

$email_from = 'rezervare_site@apenta.ro';//<== update the email address
$email_subject = "Rezervare noua Penta Aparts";
$email_body = "User: $name.\n".
    "Mail: $visitor_email.\n".
    "Check-in: $check_in.\n".
    "Check-out: $check_out.\n".
    "Numar adulti: $numar_adulti.\n".
    "Numar copii: $numar_copii.\n".
    "Telefon: $telefon.\n".
    "Message: $message.\n";



    
$to = "myalfinio@gmail.com";//<== update the email address
// $to = "filipcezariu@gmail.com";//<== update the email address

$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: thank-you.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 