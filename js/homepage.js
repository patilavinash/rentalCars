
 $(document).ready(function () {
	 setCookie("username", "Avinash", 1);
	 var user = getCookie("username");
    if (user != "") {
       $(".welcomeMessage").text("UTD Car Rentals welcomes you back , " + user);
    }
	else {
		window.location = "index.html";
	}
	
	$(".newCarRent").click( function(e){
		         //to be commented later
		         window.location="home.html";
			     postAjaxCAll($("#login-username").val() , $("#login-password").val() );
    });
});

function postAjaxCAll(user , password2){
	
	$.ajax({
            url: 'php/login.php',
            type: 'POST',
            data: {
                username: val ,
				password2 :  password2
            },
			success:function(response){
			console.log(response);
			var obj = JSON.parse(response);
			console.log(obj);
			if( obj.result == "OK") {
				setCookie("username",user,1);
				window.location="php/home.php";
			}
		    else {
				alert("retry to login");
			}
			
			},
			error : function(response){
            alert("error calling PHP !!! ");
            }
	
} );
}
