var date = new Date();

var rseconds = 59 - date.getSeconds();
var rminutes = 59 - date.getMinutes();
var rhours = 23 - date.getHours();
var rdays = 0;
while (date.getMonth() < 2) {
  date.setDate(date.getDate() + 1);
   rdays++;
}
rdays += 8

document.getElementById("clock").innerHTMl = rdays;
