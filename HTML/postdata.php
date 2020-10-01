<?php
if($_POST['process'] ==1){
 $username =$_POST['username'];
 $password = $_POST['password'];
 if(empty($username) && empty($password)){
 echo "Hi, stranger!";
 }else{
 echo "Hello!, ".$username. " " .$password;
 }
}
?>

<!-- de file postdata.php moet in de 'rootfolder' zijn van xamp (xam htdocs)
dan moeten we naar de localhost gaan "http://localhost/postdata.php" -->

