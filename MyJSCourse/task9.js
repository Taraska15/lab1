var today = new Date();
var xmas = new Date(today.getFullYear(), 11, 30);
if (today.getMonth()==11 && today.getDay()>30)
{
    xmas.setFullYear(xmas.getFullYear()+1);
}
var oneDay=1000*60*60*24;
console.log(Math.ceil((xmas.getTime()- today.getTime())/(oneDay))+" залишилось днів до нового року");