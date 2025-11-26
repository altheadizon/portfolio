document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if(subject && message){

        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

        window.open(gmailLink, "_blank");

        formMessage.textContent = "Opening Gmail draft...";
        formMessage.style.color = "green";

        this.reset();
        document.getElementById("to").value = to;
    } else {
        formMessage.textContent = "Please fill in both subject and message.";
        formMessage.style.color = "red";
    }
});
