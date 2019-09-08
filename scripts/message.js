/*
 * @student: Jerry Guo
 * @B00779028
 * @year: 2018
 */    

    //Check before submit the message
    function submitInfo() {  
        var nameInput =  document.getElementById("name").value;
        var nameCheck = false;
        var at =  document.getElementById("email").value;
        var dot = document.getElementById("email").value;
        var emailCheck = false;
        var dash = document.getElementById("phoneNumber").value;
        var pnLen = document.getElementById("phoneNumber").value;
        var pnCheck = false;
        var msg = document.getElementById("message").value;        
        var msgCheck = false;

        //Check if there is input for name
        if (nameInput != "") {
            nameCheck = true;
        }

        //Check if there are "@" and ".", and if "@" is before "."
        if (at.indexOf('@') != -1 && dot.indexOf('.') != -1 && at.indexOf('@') < dot.indexOf('.')) {
            emailCheck = true;
        }
    
        //Check if "-" is in the right index, and check if the length if input is correct
        if (dash.charAt(3) == "-" && dash.charAt(7) == "-" && pnLen.length == 12) {
            pnCheck = true;
        }

        //Check if there is input for message
        if (msg != "") {
            msgCheck = true;
        }

        console.log(nameCheck);
        console.log(emailCheck);
        console.log(pnCheck);
        console.log(msgCheck);

        //Give different alert messages, determined by if all the checks are passed
        if (nameCheck == true && emailCheck == true && pnCheck == true && msgCheck == true) {        
            alert('Message submitted!');
            clearInfo();
        } else {
            alert('Please check your input and try again.');
        }

    }

    //Clear all the information
    function clearInfo() {    
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("message").value = "";        
    }


    