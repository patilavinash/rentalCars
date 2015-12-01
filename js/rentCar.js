
 $(document).ready(function () {
	 
	$("#btn-login").click(function(e){
		         //to be commented later
		         window.location="home.html";
			     postAjaxCAll($("#login-username").val() , $("#login-password").val() );
    });
});
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
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
