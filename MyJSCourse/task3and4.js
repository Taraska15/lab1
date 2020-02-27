var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    console.log("Точна дата: " +day + ":"+ month + ":"+ year);
    
    var side1 = 5;
    var side2 = 6;
    var side3 = 7;
    var S = (side1+side2+side3)/2;
    var V =  Math.sqrt(S*((S-side1)*(S-side2)*(S-side3)));
    console.log(V);

function print_current_page()
{
window.print();
}
