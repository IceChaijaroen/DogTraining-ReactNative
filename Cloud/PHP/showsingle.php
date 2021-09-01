<?php
include 'connect.php';

$dogid = $_GET["id"];

// Creating SQL command to fetch all records from Table.
$sql = "SELECT * FROM doginfo WHERE iddoginfo = '".$dogid."'";

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
