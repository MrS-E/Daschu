<?php
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$message = $_POST['message'];
if(isset( $_POST['subject']))
$subject = $_POST['subject'];

$content="From: $name \n Email: $email \n Message: $message";
$recipient = "muster@ag.ch";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die(print'
<html>
    <head>
        <meta charset="UTF-8">
        <title>Muster AG</title>
    </head>
    <body>
        <h1 id="not_found">502 Mail could not be sent</h1>
        <buttononclick="history.back()">Back to last known Page</button>
    </body>
</html>
');
print'
<html>
    <head>
        <script type="text/javascript">
        history.back();
        alert("Mail was sent successfully");
        </script>
    </head>
    <body>
    </body>
</html>
';
?>