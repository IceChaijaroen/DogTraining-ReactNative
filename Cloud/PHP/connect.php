<?php
$servername = "34.87.79.237";
$username = "root";
$password = "tanawatice0282";
$dbname = "dog";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}
?>
