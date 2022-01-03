//array for display month & day name ..

let month_array =[
  "January","February","March","April","May","June","July","August","September", "Octuber", "Novmeber", "December" 
];
let day_array =[
   "Sunday","Monday","Tuesday","Webnesday", "Thuesday","Friday" ,"Saturday"
];

// let day_short_array =[
//   "Sun","Mon","Tue","Web", "Thu","Fri" ,"Sat"
// ];

// custom Date 
let current = new Date();
let current_date = current.getDate();
let current_day = current.getDay();
let current_month =current.getMonth();
let current_year =current.getFullYear();



//Display day ,month ,Year & date

let date  = document.querySelector(".date_day .date");
let day   = document.querySelector(".date_day .day");
let month = document.querySelector(".month-box h1");
let year  = document.querySelector(".year-box span");

let day_31  = document.querySelector(".day_31");
let day_30  = document.querySelector(".day_30");
let day_29  = document.querySelector(".leap_year");

// ---------- Current Date Property---------//
let date_circle = document.querySelectorAll("table .custom_date_circle td");
let days_box    = document.querySelectorAll("table .custom_day_color td");


date.innerHTML  = current_date;
day.innerHTML   = day_array[current_day];
month.innerHTML = month_array[current_month];
year.innerHTML  = current_year;
// fix the days 
// for (let i = 0; i < days_box.length; i++) {
//   if(days_box[i].innerHTML== day_short_array[current_day]){
//     days_box[i].classList.add("current_day_color")
// }
// }

//fix the date..
for (let i = 0; i < date_circle.length; i++) {
  if(date_circle[i].innerHTML==current_date){
    date_circle[i].classList.add("current_date_circle")
  }  
}

// check for 31 month's day
if(month.innerHTML=="December"||
   month.innerHTML=="January"|| 
   month.innerHTML=="March"||
   month.innerHTML=="May"||
   month.innerHTML=="July"||
   month.innerHTML=="August"||
   month.innerHTML=="Octuber"
){
      console.log("31");
}
//check for 30 Days..
else{
    console.log("30");
    day_31.style.display="none";

//check for leap year..
  if(month.innerHTML=="February"){
    if( year.innerHTML%4==0){
      if(year.innerHTML%400==0 && year.innerHTML%100==0){ 
          console.log("leap");
          day_30.style.display ="none";  
      }
    }
    else{
        console.log("not");
        day_29.style.display ="none";
        day_30.style.display ="none";
      }
    }
  }