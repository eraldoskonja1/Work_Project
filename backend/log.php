<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Headers: Content-Type,
//         Access-Control-Allow-Headers, Authorization, X-Requested-With");
        
require_once('db.php');

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;

$result = mysqli_query($con,"SELECT * from register where email='".$email."' AND password='".$password."'");

$nums = mysqli_num_rows($result);
$rs = mysqli_fetch_array($result);

if($nums>=1){
    http_response_code(200);
    $outp = "";

    $outp .='{"email":"'  .$rs["email"] . '", ';
    $outp .='"first_name":"'  .$rs["first_name"] . '", ';
    $outp .='"last_name":"'  .$rs["last_name"] . '", ';
    $outp .='"Status":"200"}';

    echo $outp;
}
else{
    // echo json_encode(['error'=>'Please enter your email and password correctly.']);
    echo json_encode('Please enter your email and password correctly.');
  
}