function kompare(x){
    return ((Math.abs(100 - x) <= 20) ||
     (Math.abs(400 - x) <= 20))
}
console.log(kompare(500));
console.log(kompare(20));
console.log(kompare(61));
console.log(kompare(80))
console.log(kompare(99))