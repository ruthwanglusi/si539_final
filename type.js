var i = 0;
var txt = "Hi! I'm Ruth. I design FUTURE UX experiences.";
var speed = 50;

function typeWriter()
{
  if (i < txt.length) {
    document.getElementById("headline").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
