<html>
<body>
Send to: <?php echo $_POST["email"]; ?><br><br>
Pwd: <?php echo $_POST["password"]; ?>
</body>
</html>


<!-- TODO: Contact bluehost to change default outgoing mail server -->
<?php
// Multiple recipients
$to = ''; // note the comma

$subject = 'Email Proposal';
$from = 'jakema@jakema2017.com';
 
// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Additional headers
$headers[] = 'To: Jake <jakema1226@gmail.com>, Kevin <kevinma0426@gmail.com>';
$headers[] = 'From: Jake Ma <jakema@jakema2017.com>';
$headers[] = 'Cc: jakema2017@gmail.com';
$headers[] = 'Bcc: jakema@jakema2017.com';
 
// Compose a simple HTML email message
$message = '<html><body>';
$message .= '<h1 style="color:#f40;">Hi Jake!</h1>';
$message .= '<p style="color:#080;font-size:18px;">Will you email me?</p>';
$message .= '</body></html>';
 
// Sending email
if(mail($to, $subject, $message, implode("\r\n", $headers))){
    echo 'Your mail has been sent successfully.';
} else{
    echo 'Unable to send email. Please try again.';
}
?>