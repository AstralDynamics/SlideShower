<?php

// Possibly redundant
//
//serversettings($dbhost, $dbusername, $dbpasswd, $dbname);
//$connect = mysql_pconnect($dbhost,$dbusername,$dbpasswd) or die ("Couldn't connect to server.");
//mysql_select_db($dbname) or die ("Couldn't find db");

$fileName = $_POST['nameOfFile'];
$fileDescription = $_POST['description'];

// Create connection
$conn = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbusername,$dbpasswd);  

if ($_FILES["file"]["error"] > 0){
  die("Error: " . $_FILES["file"]["error"] );
}
else{

	if (file_exists("upload/" . $_FILES["file"]["name"])){
		die($_FILES["file"]["name"] . " already exists. ");
	}
	else{
		move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $_FILES["file"]["name"]);
		// File has been moved to the upload directory at this point

		// New Data
		$iFilename = $_FILES["file"]["name"];
		$iUser = $username;
		$iNameOfFile = $nameOfFile;
		$iDescription = $fileDescription;

		// Execute query
		$sql = "INSERT INTO file (filename, user, nameOfFile, description) VALUES (:filename, :user, :nameOfFile, :description)";
		$q = $conn->prepare($sql);
		$q->execute(array(':filename'=>$iFilename,
						  ':user'=>$iUser,
						  ':nameOfFile'=>$iNameOfFile,
						  ':description'=>$iDescription));

		header('location: index.php');
		die();
	}
}

die("An error has occured...");

?>
