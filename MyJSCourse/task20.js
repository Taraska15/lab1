function chek(a, b){
    if((a < 0 && b > 0) || (a > 0 && b < 0)){
        return true;
    }  
    else return false;
}
console.log(chek(2, 2));
console.log(chek(-2, 2));
console.log(chek(2, -2));
console.log(chek(-2, -2));