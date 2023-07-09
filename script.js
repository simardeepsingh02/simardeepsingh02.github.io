// Add smooth scrolling to anchor links
const navLinks = document.querySelectorAll('.nav-links a');
for (const link of navLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({ behavior: 'smooth' });
}
function sendEmail(event) {
    event.preventDefault();
    var form = document.getElementById("contact-form");
    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var message = form.elements["message"].value;
  
    var subject = "New Message from My Portfolio";
    var body = "Name: " + name + "/n";
    body += "Email: " + email + "/n";
    body += "Message: " + message;
  
    var mailtoLink = "mailto:iamsimar12@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  
    window.location.href = mailtoLink;
  }
