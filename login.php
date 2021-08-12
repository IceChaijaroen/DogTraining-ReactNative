<?php
    require_once "connect.php";

    $json = json_decode(file_get_contents('php://input'), true);

    $email = $json['email'];
    $password = $json['password'];

    if ($email!=""){
        $count = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM user where email='$email'"));
        if($count==0){
            $count1 = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM user where username = '$email' and password = '$password'"));
        }else{
            $count = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM user where email = '$email' and password = '$password'"));
        }
    }else{
        echo json_encode('Please Enter');
    }

?>







New version
<?php
    require_once "connect.php";
    session_start();

    $json = json_decode(file_get_contents('php://input'), true);

    $email = $json['email'];
    $password = $json['password'];
    

    if ($json['email']!=""){
        $isEmail = mysqli_num_rows(mysqli_query($conn, "SELECT iduser FROM user where email = '$email'"));
        $isUsername = mysqli_num_rows(mysqli_query($conn, "SELECT iduser FROM user where username ='$email'"));
        if(!$isEmail && !$isUserName){
            echo json_encode('Email Incorrect');
        } else {
            if($isEmail){
                $login_check = mysqli_num_rows(mysqli_query($conn, "SELECT iduser FROM user where password = '$password' and email = '$email'"));
            }else if($isUsername){
                $login_check = mysqli_num_rows(mysqli_query($conn, "SELECT iduser FROM user where password = '$password' and username = '$email'"));
            }
            if($login_check == 0){
                echo json_encode('Password Incorrect');
            } else {
                echo json_encode('true');
            }
        }
    }else{
        echo json_encode('Please Enter');
    }

?>











<?php
require 'config.php';
require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$app->post('/login','login'); /* User login */
$app->post('/signup','signup'); /* User Signup */
$app->post('/feed','feed'); /* User Feeds */
$app->post('/feedUpdate','feedUpdate'); /* User Feeds */
$app->post('/feedDelete','feedDelete'); /* User Feeds */
//$app->post('/userDetails','userDetails'); /* User Details */

$app->run();

/************************* USER LOGIN *************************************/
/* ### User login ### */
function login() {
    $request = \Slim\Slim::getInstance()->request();
    $data = json_decode($request->getBody());
    try {
       $db = getDB();
       $userData ='';
       $sql = "SELECT user_id, name, email, username FROM users WHERE (username=:username or email=:username) and password=:password ";
      $stmt = $db->prepare($sql);
      $stmt->bindParam("username", $data->username, PDO::PARAM_STR);
      $password=hash('sha256',$data->password);
      $stmt->bindParam("password", $password, PDO::PARAM_STR);
      $stmt->execute();
      $mainCount=$stmt->rowCount();
      $userData = $stmt->fetch(PDO::FETCH_OBJ);
if(!empty($userData))
{
     $user_id=$userData->user_id;
     $userData->token = apiToken($user_id);
}
    $db = null;
if($userData){
   $userData = json_encode($userData);
   echo '{"userData": ' .$userData . '}';
} else {
   echo '{"error":{"text":"Bad request wrong username and password"}}';
}

}
catch(PDOException $e) {
echo '{"error":{"text":'. $e->getMessage() .'}}';
}
}


/* ### User registration ### */
function signup() {
   $request = \Slim\Slim::getInstance()->request();   
   $data = json_decode($request->getBody());
   $email=$data->email;
   $name=$data->name;
   $username=$data->username;
   $password=$data->password;
   try {
       $username_check = preg_match('~^[A-Za-z0-9_]{3,20}$~i', $username);
       $email_check = preg_match('~^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})$~i', $email);
      $password_check = preg_match('~^[A-Za-z0-9!@#$%^&*()_]{6,20}$~i', $password);
     
    if (strlen(trim($username))>0 && strlen(trim($password))>0 && strlen(trim($email))>0 && $email_check>0 && $username_check>0 && $password_check>0)
   {
    $db = getDB();
    $userData = '';
    $sql = "SELECT user_id FROM users WHERE username=:username or email=:email";
    $stmt = $db->prepare($sql);
    $stmt->bindParam("username", $username,PDO::PARAM_STR);
    $stmt->bindParam("email", $email,PDO::PARAM_STR);
    $stmt->execute();
   $mainCount=$stmt->rowCount();
   $created=time();
   if($mainCount==0)
  {
    /*Inserting user values*/
     $sql1="INSERT INTO users(username,password,email,name)VALUES(:username,:password,:email,:name)";
      $stmt1 = $db->prepare($sql1);
      $stmt1->bindParam("username", $username,PDO::PARAM_STR);
      $password=hash('sha256',$data->password);
      $stmt1->bindParam("password", $password,PDO::PARAM_STR);
      $stmt1->bindParam("email", $email,PDO::PARAM_STR);
      $stmt1->bindParam("name", $name,PDO::PARAM_STR);
      $stmt1->execute();
      $userData=internalUserDetails($email);
      }
      $db = null;

if($userData){
      $userData = json_encode($userData);
      echo '{"userData": ' .$userData . '}';
} else {
      echo '{"error":{"text":"Enter valid data"}}';
}

}
else{
      echo '{"error":{"text":"Enter valid data"}}';
}
}
catch(PDOException $e) {
      echo '{"error":{"text":'. $e->getMessage() .'}}';
}
}
?>
