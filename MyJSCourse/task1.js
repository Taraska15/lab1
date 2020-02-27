var today = new Date();
    var day = today.getDay()
    var daylist = ["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"];
    console.log("Сьогодні : "+ daylist[day]);
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var secondFull = today.getSeconds();
    var minuteFull = today.getMinutes();
    var hourFull = today.getHours();
    hour = (hour >= 12)? hour - 12: hour;
    var prepand = (hour >= 12)? " PM ":" AM ";
    hour = (hour >= 12)? hour - 12: hour;
    if (hour===0 && prepand===' PM ') 
    {
        if(minute===0 && second===0)
        {
            hour=12;
            prepand=' Noon';
        }
        else
        {
            hour=12;
            prepand=' PM '
        }
    }
    if (hour===0 && prepand===' Am ')
    {
        if(minute===0 && second===0)
        {
            hour=12;
            prepand=' Midnight';
        }
        else
        {
            hour=12;
            prepand=' AM';
        }
    }
    console.log("Точний час "+hour +prepand + ":" + minute + ":" + second + "    "+ hourFull+ " : "+minuteFull+" : "+secondFull);
