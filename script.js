let countDownDate = new Date('Nov 11, 2024 00:00:00').getTime();

let time1 = 1000*60*60*24;
let time2 = 1000*60*60;
let time3 = 1000*60;




let a = setInterval(e=>{
    let today = new Date().getTime();
    let distance = countDownDate - today;

    let days = Math.floor(distance/time1);
   let hours = Math.floor((distance%time1)/time2);
   let minutes = Math.floor((distance%time2)/time3);
   let seconds = Math.floor((distance%time3)/1000);

   document.querySelector('#day').innerHTML = days;
   document.querySelector('#hour').innerHTML = hours;
   document.querySelector('#min').innerHTML = minutes;
   document.querySelector('#sec').innerHTML = seconds;

   if (distance < 0) {
    clearInterval(a);
    document.querySelector('#day').innerHTML = '00';
    document.querySelector('#hour').innerHTML = '00';
    document.querySelector('#min').innerHTML = '00';
    document.querySelector('#sec').innerHTML = '00';
   }
},1000)