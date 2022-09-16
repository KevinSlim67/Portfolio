function highlightAll(event) {
    const className = event.classList[1].replace("-demo", "");
    const elements = document.getElementsByClassName(className);
    const bgColor = getComputedStyle(event).backgroundColor;

    for (e in elements) {
        if (elements[e].style !== undefined) elements[e].style.backgroundColor = bgColor;
    }
}

function unHighlightAll(event) {
    const className = event.classList[1].replace("-demo", "");
    const elements = document.getElementsByClassName(className);

    const bgColor = "rgba(255, 255, 255, 0.103)";

    for (e in elements) {
        if (elements[e].style !== undefined) elements[e].style.backgroundColor = bgColor;
    }
}
function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}