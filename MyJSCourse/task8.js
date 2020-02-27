function gues(){

var number1 = Math.ceil(Math.random() * 10);
var number2 = Number(document.getElementById("numb").value);

if (number1 === number2){
<<<<<<< HEAD
    document.write("Ви вгадали")
}
else {document.write("Ви не вгадали");}
console.log(number2);
console.log(number1);
}
setTimeout( function(){
 location.reload();}, 7000)
=======
    document.getElementById("answer").innerHTML="Ви вгадали"
}
else {  document.getElementById("answer").innerHTML="Ви не вгадали"}
console.log(number2);
console.log(number1);
}
>>>>>>> Finalka
