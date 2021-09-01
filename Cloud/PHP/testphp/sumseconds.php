

<?php
include 'connect.php';

// Creating SQL command to fetch all records from Table.
$sql = "SELECT SUM(seconds) as sum FROM dog.sit WHERE exerid = 1 AND count BETWEEN 0 AND 10;";

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
