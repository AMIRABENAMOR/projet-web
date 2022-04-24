<?php
header("Access-Control-Allow-Origin:http://localhost:4200");
header("Access-Control-Allow-Methods:GET,POST,OPTIONS,PUT,DELETE");
header("Access-Control-Allow-Headers:Content-Disposition,Content-Type,content-Length,Accept-Encoding");
header("Content-type:application/json");
$con=mysqli_connect('localhost','root','','pets_home');
$data=file_get_contents("php://input");
$data=json_decode($data);
$id=$data->id;
$email=$data->email;
$q=$data->qt;
$reqq="SELECT * from panier WHERE idc='$email' and idp='$id'";
$res1=mysqli_query($con,$reqq);
$nb=mysqli_num_rows($res1);
if($nb==0)
{
	$req="insert into panier VALUES('aziz@yahoo.fr','pd',0);";
	$res=mysqli_query($con,$req);
	print_r(json_encode("add product"));
}
if($nb!=0)
{
	$req="update panier set quantite=quantite+1 WHERE idp='$id' and idc='$email'";
$res=mysqli_query($con,$req);

	
}

	print_r(json_encode($nb));
	





?>