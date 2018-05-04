
function validate()
{ 
	if( document.StudentRegistration.uname.value == "" )
	{
		alert( "Please provide your Name!" );
		document.StudentRegistration.uname.focus() ;
		return false;
	}
	if ( ( StudentRegistration.gender[0].checked == false ) && ( StudentRegistration.gender[1].checked == false ) )
	{
		alert ( "Please choose your Gender: Male or Female" );
		return false;
	}   
	if( document.StudentRegistration.age.value == "" )
	{
		alert( "Please provide your age!" );
		document.StudentRegistration.age.focus() ;
		return false;
	}
	if( document.StudentRegistration.date.value == "" )
	{
		alert( "Please provide your DOB!" );
		document.StudentRegistration.date.focus() ;
		return false;
	}
	if( document.StudentRegistration.Fname.value == "" )
	{
		alert( "Please provide your Father Name!" );
		document.StudentRegistration.Fname.focus() ;
		return false;
	}
    if( document.StudentRegistration.Mname.value == "" )
	{
		alert( "Please provide your Mother Name!" );
		document.StudentRegistration.Mname.focus() ;
		return false;
	}
	if( document.StudentRegistration.contactno1.value == "" ||
           isNaN( document.StudentRegistration.contactno1.value) ||
           document.StudentRegistration.contactno1.value.length != 10 )
	{
		alert( "Please provide a Mobile No in the format 123." );
		document.StudentRegistration.contactno1.focus() ;
		return false;
	}
	if( document.StudentRegistration.contactno2.value == "" ||
           isNaN( document.StudentRegistration.contactno2.value) ||
           document.StudentRegistration.contactno2.value.length != 10 )
	{
		alert( "Please provide a Mobile No in the format 123." );
		document.StudentRegistration.contactno2.focus() ;
		return false;
	}
	var email = document.StudentRegistration.emailid.value;
	atpos = email.indexOf("@");
	dotpos = email.lastIndexOf(".");
	if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
	{
		alert("Please enter correct email ID")
		document.StudentRegistration.emailid.focus() ;
		return false;
	}
	if( document.StudentRegistration.studentsnumber.value == "" ||
           isNaN( document.StudentRegistration.studentsnumber.value) ||
           document.StudentRegistration.studentsnumber.value.length != 10 )
   {
		alert( "Please provide a Mobile No in the format 123." );
		document.StudentRegistration.studentsnumber.focus() ;
		return false;
   }
   if( document.StudentRegistration.address.value == "" )
   {
		alert( "Please provide your Postal Address!" );
		document.StudentRegistration.address.focus() ;
		return false;
   }
   if( document.StudentRegistration.Course.value == "-1" )
   {
     alert( "Please provide your Select Course!" );
    
     return false;
   }   
   return(true);
}  
   
   
   
  