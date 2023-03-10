<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Headers: Content-Type,
//         Access-Control-Allow-Headers, Authorization, X-Requested-With");
require_once('db.php');

$data = json_decode(file_get_contents("php://input"));
$first_name = $data->first_name;
$last_name = $data->last_name;
$password = $data->password;
$email = $data->email;


if ($first_name && $last_name && $email && $password) {
$sql = "insert into register(
    first_name,
    last_name,
    email,
    password
)
values(
    '$first_name',
    '$last_name',
    '$email',
    '$password'
    )";

$result = mysqli_query($con, $sql);

if($result) {

    $response['data'] = array(
        'status'=>'valid'
    );
    echo json_encode($response);
}
else {
    $response['data'] = array(
        'status'=>'invalid'
    );
    echo json_encode($response);
}
}
?>


