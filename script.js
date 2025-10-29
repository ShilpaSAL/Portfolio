function goToContact() {
  window.location.href = "contact_me.html";
}
// Function to handle form submission and send email
function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const fullMessage = `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\n\n${message}`;
  window.location.href = `mailto:shilpasalyan959@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullMessage)}`;
}