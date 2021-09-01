<?php
    include("connect.php");

    $json = json_decode(file_get_contents("php://input"), true);

    $count=$json["count"];
    $exerid=$json["exerid"];
    $sumseconds=$json["sumseconds"];


    if($count==10) {
            $query = "INSERT INTO exer_record( sitrecord ) select SUM(seconds) from sit where exerid = '$exerid' and count between 0 and 10;";
            $query_output = mysqli_query($conn, $query);
            $sitrecord = "SELECT sitrecord FROM exer_record ORDER BY sitrecord DESC LIMIT 1";
            $show = mysqli_query($conn, $query);

            if($sitrecord <= 50){
                
                $query1 = "UPDATE exer_record SET step=30 WHERE sitrecord='$sumseconds';";
                $query_output1 = mysqli_query($conn, $query1);
                $message = 'is ten +30';
                echo json_encode($message);
            } else {
                $query1 = "UPDATE exer_record SET step=20 WHERE sitrecord='$sumseconds';";
                $query_output1 = mysqli_query($conn, $query1);
                $message = 'is ten +20';
                echo json_encode($message);
            }
    } else if ($count==20) {
        $query = "INSERT INTO exer_record( sitrecord ) select SUM(seconds) from sit where exerid = '$exerid' and count between 11 and 20;";
            $query_output = mysqli_query($conn, $query);
            $sitrecord = "SELECT sitrecord FROM exer_record ORDER BY sitrecord DESC LIMIT 1";
            $checksit = mysqli_query($conn, $sitrecord);

            if($checksit <= 50){
                $query1 = "UPDATE exer_record SET step=30 WHERE sitrecord='$sumseconds';";
                $query_output1 = mysqli_query($conn, $query1);
                $message = '+30';
                echo json_encode($message);
            } else {
                $query1 = "UPDATE exer_record SET step=20 WHERE sitrecord='$sumseconds';";
                $query_output1 = mysqli_query($conn, $query1);
                $message = '+20';
                echo json_encode($message);
            }
    } else if ($count==30) {
        $query = "INSERT INTO exer_record( sitrecord ) select SUM(seconds) from sit where exerid = '$exerid' and count between 21 and 30;";
            $query_output = mysqli_query($conn, $query);
            $sitrecord = "SELECT sitrecord FROM exer_record ORDER BY sitrecord DESC LIMIT 1";
            $checksit = mysqli_query($conn, $sitrecord);

            if($checksit <= 50){
                $query1 = "UPDATE exer_record SET step=30 WHERE sitrecord='$sumseconds';";
                $query_output1 = mysqli_query($conn, $query1);
                $message = '+30';
                echo json_encode($message);
            } else {
                $query1 = "UPDATE exer_record SET step=20 WHERE sitrecord='$sumseconds';";
                $query_output1 = mysqli_query($conn, $query1);
                $message = '+20';
                echo json_encode($message);
            }
    } else {
        $message = 'notyet';
        echo json_encode($message);
    }
    
?>  
