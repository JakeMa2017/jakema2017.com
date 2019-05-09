<html>
<body>
Send to: <?php echo $_POST["address"]; ?><br><br>
Pwd: <?php echo $_POST["pass"]; ?>
</body>
</html>


<!-- TODO: Contact bluehost to change default outgoing mail server -->
<?php
$msg = "This is a test";
$subject = "Test";
//mail("jakema@jakema2017.com", $subject, $msg);
?>