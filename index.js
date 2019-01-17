/* Inspector
element
<a href=​"#">​Home​</a>​
element.innerText = "New Home"
"New Home"
*/

//Dont use globals. Work inside objects instead. This is just for practice purposes.

//var myElement = document.querySelector("nav ul li a"); // Selects one item.
var myNav = document.querySelectorAll('nav ul li a'); //Selects all the items.
var navLength = myNav.length;


if (navLength) {
    for (var x = 0; x < navLength; x++) {
        var i = myNav[x];
        console.log(i.text + " - " + i.getAttribute('href'));
    }
}