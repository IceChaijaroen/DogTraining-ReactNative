<?php
include 'connect.php';

$sum = $_GET["id"];

// Creating SQL command to fetch all records from Table.
$sql = "SELECT SUM(seconds) sumsit FROM sit where uid = '".$sum."'";

$result = $conn->query($sql);

if ($result->num_rows >0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $item = $row;
 
 $json = json_encode($item);
 
 }
 
} else {
 echo "No Results Found.";
}
 echo $json;
$conn->close();
?>

