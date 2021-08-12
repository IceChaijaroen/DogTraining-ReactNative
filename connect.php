
<?php
$servername = "34.87.79.237";
$username = "root";
$password = "tanawatice0282";

// Create connection
$conn = mysqli_connect($servername, $username, $password);
$dbselect = mysqli_select_db($conn,"dog");

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}else{
  echo "Connected successfully";

}

?>




