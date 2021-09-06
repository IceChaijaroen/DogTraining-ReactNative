<?php
    include("connect.php");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $second=$DecodedData['second'];
    $uid=$DecodedData['uid'];
    $count=$DecodedData['count'];
    $idtrain=$DecodedData['idtrain'];

    $show = json_encode($count);

    $search = mysqli_query($conn,"SELECT * FROM recordexer WHERE count = '$count'");
    $objResult = mysqli_fetch_array($search);
    if($objResult){
            $query1 = "INSERT INTO recordexer (seconds,uid,count,idtrain) SELECT $second , $uid , MAX( count ) + 1 , $idtrain FROM recordexer where idtrain = '$idtrain';";
            $query_output = mysqli_query($conn, $query1);
            $message = '+1';
            echo json_encode($message);     
    } else {
        $query1 = "INSERT INTO recordexer (seconds,uid,count,idtrain) VALUES ('$second','$uid','$count','$idtrain');";
        $query_output = mysqli_query($conn, $query1);
        echo json_encode('Success');
    } 
?>  
