<?php
    require_once "connect.php";

    $json = json_decode(file_get_contents('php://input'), true);

    $email = $json['email'];
    $password = $json['password'];

    if ($json['email']!=""){
        $isEmail = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM user where email = '$email'"));
        $isUsername = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM user where username ='$email'"));
        if(!$isEmail && !$isUserName){
            echo json_encode('Email Incorrect');
        } else {
            if($isEmail){
                $login_check = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM user where password = '$password' and email = '$email'"));
            }else if($isUsername){
                $login_check = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM user where password = '$password' and username = '$email'"));
            }
            if($login_check == 0){
                echo json_encode('Password Incorrect');
            } else {
                $sql = "SELECT iduser FROM user WHERE email = '$email'";
                $result = mysqli_query($conn, $sql);
                $row = mysqli_fetch_assoc($result);
                $id = $row['iduser'];
                $output =  array('iduser'=> $id ,'onLogin'=>'true');
                echo json_encode($output);
            }
        }
    }else{
        echo json_encode('Please Enter');
    }

?>
