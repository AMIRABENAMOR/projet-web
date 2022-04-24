<?php
header("Access-Control-Allow-Origin:http://localhost:4200");
header("Access-Control-Allow-Methods:GET,POST,OPTIONS,PUT,DELETE");
header("Access-Control-Allow-Headers:Content-Disposition,Content-Type,content-Length,Accept-Encoding");
header("Content-type:application/json");
$con=mysqli_connect('localhost','root','','pets_home');

$req="select * from produits";
$res=mysqli_query($con,$req);
$a=[];
 while ($lg=mysqli_fetch_assoc($res))
 {
	 $a[]=$lg;
	 
 }

print_r(json_encode($a));


?>