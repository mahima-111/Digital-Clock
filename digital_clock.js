
const hh=document.getElementById("hours");
const mm=document.getElementById("minutes");
const ss=document.getElementById("seconds");
const amPm=document.getElementById("am-pm");

const dd=document.getElementById("today-date");
const todayMonth=document.getElementById("month");
const todayDay=document.getElementById("day");

const btn=document.getElementById("switch");
let twelveHour=0;
btn.addEventListener('click',()=>{
    if(twelveHour==1){
        twelveHour=0;
        btn.innerText='24 hour';       
    }
        
    else if(twelveHour==0){
        twelveHour=1;
        btn.innerText='12 hour';
    }
});

function setMonth(m){
    let temp='January';
    switch(m){
        case 0: 
            temp='January';
            break;
        case 1: 
            temp='February';
            break;
        case 2: 
            temp='March';
            break;
        case 3: 
            temp='April';
            break;
        case 4: 
            temp='May';
            break;
        case 5: 
            temp='June';
            break;
        case 6: 
            temp='July';
            break;
        case 7: 
            temp='August';
            break;
        case 8: 
            temp='September';
            break;
        case 9: 
            temp='October';
            break;
        case 10: 
            temp='November';
            break;
        case 11: 
            temp='December';
            break;
    }
    return temp;
}

function setDay(num){
    let temp='sunday';
    switch(num){
        case 0:
            temp='Sunday';
            break;
        case 1:
            temp='Monday';
            break;
        case 2:
            temp='Tuesday';
            break;
        case 3:
            temp='Wednesday';
            break;
        case 4:
            temp='Thursday';
            break;
        case 5:
            temp='Friday';
            break;
        case 6:
            temp='Saturday';
            break;
    }
    return temp;
}

let d=new Date();
let todayDate=d.getDate();
let day=d.getDay();
let month=d.getMonth();
dd.innerHTML=todayDate;
todayMonth.innerText=setMonth(month);
todayDay.innerText=setDay(day);

setInterval(()=>{
    let d=new Date();
    let hour=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();
    let amOrPm;
    if(twelveHour==1){       
        //am or pm figure out
        if(hour<12){
            amOrPm='AM';
        }
        else if(hour>=12){
            amOrPm='PM';
        }
        // 12 hr clock hours adjust
        if(hour==0){
            hour=hour+12;
        }
        else if(hour>12){
            hour=hour-12;
        }        
    }
    else{
        amOrPm=null;
    }
    //add 0 in front of single digit number
    let arr=[];
    arr.push(hour);
    arr.push(min);
    arr.push(sec);
    arr.forEach((elem,i)=>{
        elem=elem.toString();
        if(elem==0){
            elem='0'+elem;
        }
        if(elem.length==1){
            elem='0'+elem;
        }
        arr[i]=elem;
    });
    hh.innerText=arr[0];
    mm.innerText=arr[1];
    ss.innerText=arr[2];
    amPm.innerText=amOrPm;
    
},1000);

setInterval(()=>{
    let d=new Date();
    let todayDate=d.getDate();
    let day=d.getDay();
    let month=d.getMonth();
    dd.innerHTML=todayDate;
    todayMonth.innerText=setMonth(month);
    todayDay.innerText=setDay(day);
},3600);



