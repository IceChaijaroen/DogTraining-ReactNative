<?php
    include("connect.php");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $idjam=$DecodedData['idjam'];

    $result=mysql_query("INSERT into jam (idjam) values ($idjam)");

    if(!$result){
        $message="Error..";
    }else{
        $message="Register Success";
    }

    $Response[]=array("message"=>$message);
    echo json_encode($Response);
?>