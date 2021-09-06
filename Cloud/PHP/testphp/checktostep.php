<?php
    include("connect.php");

    $json = json_decode(file_get_contents('php://input'), true);

    $idtrain=$json["idtrain"];

    $sql = "SELECT count FROM recordexer where idtrain='$idtrain' ORDER BY count DESC LIMIT 1;";
    $result = $conn->query($sql);
    if ($result->num_rows >0) {
        while($row = mysqli_fetch_array($result)) {
        $count = $row['count'];
        echo json_encode($count);
        }
       } else {
        echo "No Results Found.";
       }


    if($count==10) {
            $query = "INSERT INTO successexer( sumexer , idtrain ) select SUM(seconds), '$idtrain' from recordexer where uid = 1 and idtrain = '$idtrain' and count between 0 and 10;";
            $query_output = mysqli_query($conn, $query);

            $sql = "SELECT sumexer FROM successexer where idtrain = '$idtrain' ORDER BY idsuccess DESC LIMIT 1;";
            $result = $conn->query($sql);
            if ($result->num_rows >0) {
                while($row = mysqli_fetch_array($result)) {
                    $sumexer = $row['sumexer'];
                    echo json_encode($sumexer);
                }
            } else {
                echo "No Results Found.";
            }

            if($sumexer <= 50){
                $query1 = "UPDATE successexer SET step=30 WHERE sumexer='$sumexer';";
                $query_output1 = mysqli_query($conn, $query1);

                $query2 = "INSERT INTO sucjointrain( sumstep , uid, idexer ) select SUM(step), 1, '$idtrain' from successexer where idtrain = '$idtrain';";
                $query_output2 = mysqli_query($conn, $query2);
                $message = 'is ten +30';
                echo json_encode($message);
            } else {
                $query1 = "UPDATE successexer SET step=20 WHERE sumexer='$sumexer';";
                $query_output1 = mysqli_query($conn, $query1);

                $query2 = "INSERT INTO sucjointrain( sumstep , uid, idexer ) select SUM(step), 1, '$idtrain' from successexer where idtrain = '$idtrain';";
                $query_output2 = mysqli_query($conn, $query2);
                $message = 'is ten +20';
                echo json_encode($message);
            }
    } else if ($count==20) {
            $query = "INSERT INTO successexer( sumexer , idtrain ) select SUM(seconds), '$idtrain' from recordexer where uid = 1 and idtrain = '$idtrain' and count between 11 and 20;";
            $query_output = mysqli_query($conn, $query);

            $sql = "SELECT sumexer FROM successexer where idtrain = '$idtrain' ORDER BY idsuccess DESC LIMIT 1;";
            $result = $conn->query($sql);
            if ($result->num_rows >0) {
                while($row = mysqli_fetch_array($result)) {
                    $sumexer = $row['sumexer'];
                    echo json_encode($sumexer);
                }
            } else {
                echo "No Results Found.";
            }

            if($sumexer <= 50){
                $query1 = "UPDATE successexer SET step=30 WHERE sumexer='$sumexer';";
                $query_output1 = mysqli_query($conn, $query1);

                $sql = "SELECT SUM(step) result FROM successexer where idtrain = '$idtrain';";
                $result = $conn->query($sql);
                    if ($result->num_rows >0) {
                        while($row = mysqli_fetch_array($result)) {
                        $sumtep = $row['result'];
                        echo json_encode($sumtep);
                        }
                    } else {
                        echo "No Results Found.";
                    }

                $query2 = "UPDATE sucjointrain SET sumstep='$sumtep' WHERE idexer = '$idtrain';";
                $query_output2 = mysqli_query($conn, $query2);
                $message = 'is twenty +30';
                echo json_encode($message);
            } else {
                $query1 = "UPDATE successexer SET step=20 WHERE sumexer='$sumexer';";
                $query_output1 = mysqli_query($conn, $query1);

                $sql = "SELECT SUM(step) result FROM successexer where idtrain = '$idtrain';";
                $result = $conn->query($sql);
                    if ($result->num_rows >0) {
                        while($row = mysqli_fetch_array($result)) {
                        $sumtep = $row['result'];
                        echo json_encode($sumtep);
                        }
                    } else {
                        echo "No Results Found.";
                    }

                $query2 = "UPDATE sucjointrain SET sumstep='$sumtep' WHERE idexer = '$idtrain';";

                $query_output2 = mysqli_query($conn, $query2);
                $message = 'is twenty +20';
                echo json_encode($message);
            }
    } else if ($count==30) {
            $query = "INSERT INTO successexer( sumexer , idtrain ) select SUM(seconds), '$idtrain' from recordexer where uid = 1 and idtrain = '$idtrain' and count between 21 and 30;";
            $query_output = mysqli_query($conn, $query);

            $sql = "SELECT sumexer FROM successexer where idtrain = '$idtrain' ORDER BY idsuccess DESC LIMIT 1;";
            $result = $conn->query($sql);
            if ($result->num_rows >0) {
                while($row = mysqli_fetch_array($result)) {
                    $sumexer = $row['sumexer'];
                    echo json_encode($sumexer);
                }
            } else {
                echo "No Results Found.";
            }

            if($sumexer <= 50){
                $query1 = "UPDATE successexer SET step=30 WHERE sumexer='$sumexer';";
                $query_output1 = mysqli_query($conn, $query1);

                $sql = "SELECT SUM(step) result FROM successexer where idtrain = '$idtrain';";
                $result = $conn->query($sql);
                    if ($result->num_rows >0) {
                        while($row = mysqli_fetch_array($result)) {
                        $sumtep = $row['result'];
                        echo json_encode($sumtep);
                        }
                    } else {
                        echo "No Results Found.";
                    }

                $query2 = "UPDATE sucjointrain SET sumstep='$sumtep' WHERE idexer = '$idtrain';";
                $query_output2 = mysqli_query($conn, $query2);
                $message = 'is thirty +30';
                echo json_encode($message);
            } else {
                $query1 = "UPDATE successexer SET step=20 WHERE sumexer='$sumexer';";
                $query_output1 = mysqli_query($conn, $query1);

                $sql = "SELECT SUM(step) result FROM successexer where idtrain = '$idtrain';";
                $result = $conn->query($sql);
                    if ($result->num_rows >0) {
                        while($row = mysqli_fetch_array($result)) {
                        $sumtep = $row['result'];
                        echo json_encode($sumtep);
                        }
                    } else {
                        echo "No Results Found.";
                    }

                $query2 = "UPDATE sucjointrain SET sumstep='$sumtep' WHERE idexer = '$idtrain';";

                $query_output2 = mysqli_query($conn, $query2);
                $message = 'is thirty +20';
                echo json_encode($message);
            }
    } else {
        $message = 'notyet';
        echo json_encode($message);
    }
    
?>  


