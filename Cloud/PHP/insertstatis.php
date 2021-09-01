<?php
    include("connect.php");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $second=$DecodedData['second'];
    $uid=$DecodedData['uid'];
    $count=$DecodedData['count'];

    $sql = "INSERT INTO statis_exer (sit,uid,count) VALUES ('$second','$uid','$count');";
    $result = $conn->query($sql);

    if(!$result){
        $message="Error..";
    }else{
        $message="Register Success";
    }

    $Response[]=array("message"=>$message);
    echo json_encode($Response);
?>
