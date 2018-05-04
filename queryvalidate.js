function validate()
{
	if(document.query.First_name.value=='')
	{	
		alert("Please provide your first name!!");
		document.query.First_name.focus();
		return false;
	}
	if(document.query.Last_name.value=='')
	{	
		alert("Please provide your last name!!");
		document.query.Last_name.focus();
		return false;
	}
	if( document.query.mobile.value == "" ||
           isNaN( document.query.mobile.value) ||
           document.query.mobile.value.length != 10 )
	{
		alert( "Please provide a Mobile No in the format 123." );
		document.query.mobile.focus() ;
		return false;
	}
	var email=document.query.emailid.value;
	atpos=email.indexOf('@');
	dotpos=email.indexOf('.');
	if(atpos<1||(atpos-dotpos<2)||email=='')
	{
		alert("Please provide your valid E-mail id!!");
		document.query.emailid.focus();
		return false;
	}
	if(document.query.feedback.value=='')
	{
		alert("Please provide your feedback!!!");
		document.query.emailid.focus();
		return false;
	}
	
}