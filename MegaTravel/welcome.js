var time = new Date();

var hour = time.getHours();

var minute = time.getMinutes();

var message = "hello";

var date = hour + ":" + minute;

var sun = document.createElement("img");
sun.setAttribute("src", "MegaTravel/site files/sun.png");
sun.setAttribute("width", "150");
sun.setAttribute("height", "150");
sun.setAttribute("alt", "sun.png");
document.body.appendChild(sun);

var moon = document.createElement("img");
moon.setAttribute("src", "http://localhost/ITC475-Adv-Web-Dev/MegaTravel/site%20files/moon");
moon.setAttribute("width", "150");
moon.setAttribute("height", "150");
moon.setAttribute("alt", "moon.png");
document.body.appendChild(moon);

if (new Date().getHours() < 12)
{
    message = "Good Morning"
}
else if (new Date().getHours() < 17)
{
    message = "Good Afternoon";
}
else
{
    message = "Good Evening";
}

if (6 < new Date().getHours() < 18)
{
    document.getElementById("image").innerHTML=sun;
}
else
{
    document.getElementById("image").innerHTML=moon;
}

document.getElementById("good").innerHTML=message;

document.getElementById("time").innerHTML=date;