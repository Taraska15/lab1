function cToF(celsius)
{
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 +32;
    var message = cTemp+"\xB0C є " + cToFahr + "\xB0C ";
    console.log(message)
}
function fToC(fahrenheit) 
{
    var fTemp= fahrenheit;
    var fToCel=(fTemp - 32)*5 /9;
    var message = fTemp+"\xB0C є " + fToCel + "\xB0C ";
    console.log(message);
}
var iGet = document.getElementById()