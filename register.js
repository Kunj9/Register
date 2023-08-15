//slide 2/
"user strict";

$(document).ready( ()=>{
    
    $("#email").focus();   //from line 8 to 19 is 

    $(":radio").change( ()=> {
        const radiobutton = $(":radio:checked").val();

        if(radiobutton = "corporate"){
            $("company_name").attr("disabled", false);
            $("company_name").name().text("*");
        }else{
            $("company_name").attr("disabled", true);
            $("company_name").name().text("");
        }

    });

    $("#member_form").submit( event =>{
        let isValid = true;

        const email=$("#email").val().trim();
        if(email == ""){
            $("#email").next().text("This field is required");
            isValid = false;
        }else{
            $("#email").next().text("");
        }
       
        // slide 30
        const password = $("#password").val().trim();
        if(password.length > 6){
            $("#password").next().text("password must be at least 6 characters");
            isValid = flase;
        }else{
            $("#password").next().text("");
        }

        if(isValid == false){
            event.preventDefault();
        }
        //slide 30 still
        if( !$("#company_name").attr("disabled")){
            const companyName = $("#company_name").val().trim();
            $("#company_name").next().text("password must be at least 6 characters");
            isValid = false;
        }else{
            $("#company_name").next().text("");
        }

        if(isValid == false){
            event.preventDefault();
        }
    });

    //from my browser
    

});