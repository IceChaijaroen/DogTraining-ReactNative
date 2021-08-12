<?php
include("Connections/connect.php");
$user_username=$_POST["user_username"];
$user_password=$_POST["user_password"];
$user_name=$_POST["user_name"];
$user_address=$_POST["user_address"];
$user_tel=$_POST["user_tel"];
$user_email=$_POST["user_email"];
$user_picture=$HTTP_POST_FILES['user_picture']['name'];
$user_type="user";
$user_status="Y";
$user_memo="";
//echo"<br>$user_username/$user_password/$user_name/$user_address/$user_tel/$user_email/$user_picture>";
if($user_picture != ""){
copy($HTTP_POST_FILES['user_picture']['tmp_name'],"picture/$user_picture");
}else{
  $user_picture="home-user-icon.png";
}
$result=mysql_query("INSERT into user values('$user_username','$user_password','$user_name','$user_address','$user_tel','$user_email','$user_picture','$user_type','$user_status','$user_memo')");
if(!$result){
  echo"<br><h2>การบันทึกข้อผิดพลาด !!!</h2>";
}else{
  echo"<br><h2><center>บันทึกข้อมูล เรียนร้อยแล้ว<center> </h2>";
}
 ?>
