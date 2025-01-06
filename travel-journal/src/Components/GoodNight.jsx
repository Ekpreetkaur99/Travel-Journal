export default function GoodNight(){
    const hours = new Date().getHours()
    let timeofDay

    if (hours<12){
        timeofDay="Good Morning!"
    }else if(hours>=12 && hours<17){
        timeofDay="Good Afternoon"
    }else if(hours<21){
        timeofDay="Goodevening!"
    }else{
        timeofDay="Night"
    }

    return(
       <h1>The time is {timeofDay}</h1> 
    )
}
