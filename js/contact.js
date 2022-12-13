function sendEmail() {
    Email.send({
        SecureToken : "ef6d43b2-b176-420c-b8ae-a415d57444a9",
        To : "gamehubadmacc@gmail.com",
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : document.getElementById("body").value
    }).then(
        message => alert(message)
    );
}