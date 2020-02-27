function lapyear(year)
{
    return (year % 4 === 0)? (year % 100 === 0): (year % 400 === 0);
}   

console.log(lapyear(2020) );
console.log(lapyear(3220) );
console.log(lapyear(1923) );
console.log(lapyear(1500) );