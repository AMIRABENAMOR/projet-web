<?php
header("Access-Control-Allow-Origin:http://localhost:4200");
header("Access-Control-Allow-Methods:GET,POST,OPTIONS,PUT,DELETE");
header("Access-Control-Allow-Headers:Content-Disposition,Content-Type,content-Length,Accept-Encoding");
header("Content-type:application/json");
$con=mysqli_connect('localhost','root','','pets_home');
$data=file_get_contents("php://input");
$data=json_decode($data);
$email=$data->client;
$type=$data->type;
$datedeb=$data->datedeb;
$datef=$data->datef;
$carnte=$data->carnet;




print_r(json_encode("ok"));


?>