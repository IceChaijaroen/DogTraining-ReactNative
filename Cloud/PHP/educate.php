<?php
include 'connect.php';

$idtrain = $_GET["idtrain"];

// Creating SQL command to fetch all records from Table.
$sql = "SELECT dogtrain.* ,traindescrip.* 
FROM dogtrain
INNER JOIN traindescrip ON dogtrain.idtrain = traindescrip.iddes WHERE idtrain = '".$idtrain."';";

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