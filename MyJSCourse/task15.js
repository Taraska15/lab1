function split(num){
    if(num <= 13){
        return 13 - num;
    }
    else return (num - 13) * 2;
}
console.log(split(32));
console.log(split(2));
console.log(split(12));
console.log(split(63));