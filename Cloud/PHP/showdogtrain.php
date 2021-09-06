
<?php
include 'connect.php';

// Creating SQL command to fetch all records from Table.
$sql = "SELECT * FROM 
(SELECT * FROM dog.dogtrain) a
LEFT JOIN (SELECT * FROM dog.sucjointrain where uid = 1 ) b
ON a.idtrain = b.idexer;";

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
