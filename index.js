/* Inspector
element
<a href=​"#">​Home​</a>​
element.innerText = "New Home"
"New Home"
*/

// Dont use globals. Work inside objects instead. This is just for practice purposes.
/*
var myElement = document.querySelector("nav ul li a"); // Selects one item.
var myNav = document.querySelectorAll('nav ul li a'); //Selects all the items.
var navLength = myNav.length;


if (navLength) {
    for (var x = 0; x < navLength; x++) {
        var i = myNav[x];
        console.log(i.text + " - " + i.getAttribute('href'));
    }
}
*/

/* More Practice:

var one = document.querySelector("#liId");
document.write(one + "<br>");

var one = document.querySelector("#liId a");
document.write(one + "<br>");

var one = document.querySelector("#liId a").innerText;
document.write(one + "<br>");

var two = document.querySelector("#myDIV");
document.write(two + "<br>");
*/

var navigation = document.querySelectorAll("nav ul li a");
var navigationLength = navigation.length;
if (navigation.length) {
    for (var x = 0; x < navigationLength; x++) {
        var i = navigation[x];
        console.log(i.text + " " + i.getAttribute("href"));
    }
}