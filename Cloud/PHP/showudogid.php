<?php
include 'connect.php';

$udogid = $_GET['id'];

// Creating SQL command to fetch all records from Table.
$sql = "SELECT * FROM user_dog where udogid = '".$udogid."' ORDER BY udogid ASC LIMIT 1 ";

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

