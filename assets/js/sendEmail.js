function sendMail(contactForm){
    document.getElementById("btn-submit").innerHTML="Sending request...";
    emailjs.send("gmail", "ionut",{
        from_name: contactForm.name.value,
        from_email: contactForm.emailaddress.value,
        project_request: contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log("Success!", response);
            document.getElementById("btn-submit").innerHTML="Request successfully sent!";
        },
        function(error){
            console.log("Failed!", error);
            document.getElementById("messages").innerHTML="Unsuccessfull!";
        }
        );
    return false;
}
