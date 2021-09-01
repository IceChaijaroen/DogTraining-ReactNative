<?php
    include("connect.php");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $second=$DecodedData['second'];
    $uid=$DecodedData['uid'];
    $count=$DecodedData['count'];

    $search = mysqli_query($conn,"SELECT * FROM sit WHERE count = '$count'");
    $objResult = mysqli_fetch_array($search);
    if($objResult){
            $query1 = "INSERT INTO sit (seconds,uid,count) SELECT $second , $uid , MAX( count ) + 1 FROM sit;";
            $query_output = mysqli_query($conn, $query1);
            $message = '+1';
            echo json_encode($message);     
    } else {
        $query1 = "INSERT INTO sit (seconds,uid,count) VALUES ('$second','$uid','$count');";
        $query_output = mysqli_query($conn, $query1);
        echo json_encode('Success');
    } 
?>  
