<?php
    require_once "connect.php";

    $json = json_decode(file_get_contents('php://input'), true);

    $email = $json['email'];
    $password = $json['password'];

    if ($json['email']!=""){
        $count = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM 
        user where email = '$email' or where username ='$email'"));

        if($count==0){
            echo json_encode('Email Incorrect');
        } else {
            $count1 = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM 
            user where password = '$password'"));
            if($count1 == 0){
                echo json_encode('Password Incorrect');
            } else {
                echo json_encode('true');
            }
        }

    }else{
        echo json_encode('Please Enter');
    }

?>