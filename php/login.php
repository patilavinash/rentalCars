<?php
	require_once 'dbconnection/dbConnect.php';
	$conn = dbConnect();

	$error=''; // Variable To Store Error Message
		if (isset($_POST['username'])) 
		{
			if (empty($_POST['username']) || empty($_POST['password'])) 
			{
			$error = "Username or Password is invalid";
			echo $error;
			}
			else
			{
			$username=$_POST['username'];
                        $password=md5($_POST['password']);

			$query = "select * from userlogin where Password ='$password' AND Email ='$username'";
                    
			$datauser =  $conn->query($query);
 
			$rows = $datauser->rowCount();
			}
			if ($rows == 1)
			{
				$_SESSION['login_user']=$username; 
				header("location:home.php"); 
		        } 
			else {
				$error = "Username or Password is invalid";
				echo $error;
			     }			
		}
?>	 
<html>
<head>
  <meta charset="utf-8">
  <title>Login Form</title>
</head>
<body>
    <div class="login">
      <h1>Login</h1>
      <form method="post">
        <p>Username  <input type="text" name="username" value="" placeholder="Username"></p>
        <p>Password  <input type="password" name="password" value="" placeholder="Password"></p>
        <p class="submit"><input type="submit" name="submit" value="submit"></p>
      </form>
    </div>
</body>
</html>


