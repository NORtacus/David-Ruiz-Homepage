function showError(elemId, hint) {
    document.getElementById(elemId).innerHTML = hint;
}
function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var subject = document.contactForm.subject.value;
    var message = document.contactForm.message.value;
    var nameErr = emailErr = subjectErr = messageErr = true;
    
    if(name == "") {
        showError("nameErr", "Please enter your name");
    } else {
        var regex = /^.{5,}$/;                
        if(regex.test(name) === false) {
            showError("nameErr", "Please enter your full name");
        } else {
            showError("nameErr", "");
            nameErr = false;
        }
    }
    
    if(email == "") {
        showError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            showError("emailErr", "Please enter a valid email address");
        } else{
            showError("emailErr", "");
            emailErr = false;
        }
    }
 
    if(subject == "") {
        showError("subjectErr", "Please write your subject");
    } else {
        var regex = /^.{15,}$/;                
        if(regex.test(message) === false) {
            showError("subjectErr", "Subject should be more than 15 characters");
        } else {
            showError("subjectErr", "");
            subjectErr = false;
        }
    }

       if(message == "") {
        showError("messageErr", "Please write your message");
    } else {
        var regex = /^.{5,}$/;                
        if(regex.test(message) === false) {
            showError("messageErr", "Message should be more than 25 characters");
        } else {
            showError("messageErr", "");
            messageErr = false;
        }
    }
    
    if((nameErr || emailErr || subjectErr || messageErr) == true) {
       return false;
    } 
};