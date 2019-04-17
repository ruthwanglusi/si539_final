var i = 0;
var txt = "Hi! I'm Ruth. I design FUTURE experiences.";
var speed = 50;

console.log(txt);

function typeWriter()
{
  if (i < txt.length) {
    document.getElementById("headline").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
