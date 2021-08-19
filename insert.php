<?php
    include("connect.php");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $second=$DecodedData['second'];
    $uid=$DecodedData['uid'];
    $count=$DecodedData['count'];

    $search = mysqli_query($conn,"SELECT * FROM statis_exer WHERE count = '$count'");
    $objResult = mysqli_fetch_array($search);
    if($objResult){
            $query1 = "INSERT INTO statis_exer(sit,uid,count) SELECT $second , $uid , MAX( count ) + 1 FROM statis_exer;";
            $query_output = mysqli_query($conn, $query1);
            $message = '+1';
            echo json_encode($message);     
    } else {
        $query1 = "INSERT INTO statis_exer (sit,uid,count) VALUES ('$second','$uid','$count');";
        $query_output = mysqli_query($conn, $query1);
        echo json_encode('Success');
    } 
?>  




if(!$result){
        $message="Error..";
    }else{
        $message="Register Success";
    }

    $Response[]=array("message"=>$message);
    echo json_encode($Response);