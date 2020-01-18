var nameField = document.getElementById('name');
var surnameField = document.getElementById('surname');
var emailField = document.getElementById('email');
var passwordField = document.getElementById('password');
var form = document.querySelector('form');

form.onsubmit = function() {
    
    var email;
    var inputCount = 0;
    var inputs = document.querySelectorAll('.fields');

    inputs.forEach( field => {
        if (field.value == "") {
            // if field is empty, display message error for specific field
            showInputError(field.id);

        } else {
            
            //verify if email is valid
            if (field.id == 'email') {
                if (validateEmail(field.value)) {
                    email = true;
                }
            }

            removeInputError(field.id);
            // count valid non emtpy fields (total should be 4)
            inputCount++;
        }
    });

    if (inputCount === 4) {
        if (email) {
            return true;
            
        }
    } else {
        return false;
    }

}

function removeInputError(fieldId) {

    if (fieldId === "email") {
        // change placeholder's color back to default
        document.getElementById(fieldId).classList = "fields";
    }

    // clear error icon
    document.getElementById(fieldId).style.background = 'none';
    // remove error message
    document.getElementById(fieldId + "ErrorMsg").style.opacity = "0";
}

function showInputError(fieldId) {

    let msg = "";
    
    // display error icon
        document.getElementById(fieldId).style.background = 'url("../images/icon-error.svg")';
        document.getElementById(fieldId).style.backgroundRepeat = 'no-repeat';
        document.getElementById(fieldId).style.backgroundPosition = '95%';

        switch(fieldId) {
            case "name":
                document.getElementById(fieldId).placeholder = "";
                msg = "First Name cannot be empty";
                break;
            
            case "surname":
                document.getElementById(fieldId).placeholder = "";
                msg = "Last Name cannot be empty";
                break;

            case "email":
                document.getElementById(fieldId).placeholder = "email@example/com";
                //change placeholder's color
                document.getElementById(fieldId).classList += " invalid";
                msg = "Looks like this is not an email";
                break;

            case "password":
                document.getElementById(fieldId).placeholder = "";
                msg = "Password cannot be empty";
                break;
        }

        document.getElementById(fieldId + "ErrorMsg").innerHTML = msg;
        document.getElementById(fieldId + "ErrorMsg").style.opacity = "1";
}

function validateEmail(userInput) {

    var emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (userInput.match(emailRegx)) {
      return true;
    } else {
      return false;
    }    
}

