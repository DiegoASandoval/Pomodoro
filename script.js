let breakMinutes = 5;
let sessionMinutes = 25;
let second = 1;
let min = 25;
let breakTimes = 1, sessionTimes = 1, person = 0;
let isPaused = true;

const addTime = function (option){   
    return option += 1;  
}
const subTime = function (option){
    return option -= 1;
}
const reset = function(){
    min = sessionMinutes;
    minutes.textContent = sessionMinutes;
    seconds.textContent = '00';
    second = 1;
}
const header = function(){
    if (person%2 == 1) {
        current.textContent = 'Session Person 1';
    }else if (person%2== 0){
        current.textContent = 'Session Person 2';
    }
    person++;
}
const setTimer = function(){

    if (breakTimes == sessionTimes){
        header();
        min = sessionMinutes;
        sessionTimes++;
        minutes.textContent = sessionMinutes;
        seconds.textContent = '00';
        second = 1;
        
    }else if(sessionTimes > breakTimes){
        current.textContent = 'Break';
        
        if(breakTimes%3 == 0){
            min = 15;           
            minutes.textContent = "15";
        }else{
            min = breakMinutes;           
            minutes.textContent = breakMinutes;
        }
        breakTimes += 1;
        seconds.textContent = '00';
        second = 1;
    }  
}

const breakDown = document.querySelector('#breakDown');
const breakUp = document.querySelector('#breakUp');
const sessionUp = document.querySelector('#sessionUp');
const sessionDown = document.querySelector('#sessionDown');
const sessionTime = document.querySelector('#session');
const breakTime = document.querySelector('#break');
const minutes = document.querySelector('#min');
const seconds = document.querySelector('#sec');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const stop = document.querySelector('#stop');
const current = document.querySelector('#current')
const swich = document.querySelector('#switch');
breakDown.addEventListener('click',()=>{
    breakMinutes=subTime(breakMinutes);
    breakTime.textContent = breakMinutes;
    if(breakMinutes == 1){
        breakDown.disabled = true
    }
    breakUp.disabled = false;
})
breakUp.addEventListener('click',()=>{
    breakMinutes=addTime(breakMinutes);
    breakTime.textContent = breakMinutes;
    if(breakMinutes == 60){
        breakUp.disabled = true;
    }
    breakDown.disabled = false;
})
sessionUp.addEventListener('click',()=>{
    sessionMinutes = addTime(sessionMinutes);
    sessionTime.textContent = sessionMinutes;
    minutes.textContent = sessionMinutes;
    min = sessionMinutes;
    if (sessionMinutes == 60) {
        sessionUp.disabled = true;
    }
    sessionDown.disabled = false;
    
})
sessionDown.addEventListener('click',()=>{
    sessionMinutes = subTime(sessionMinutes);
    sessionTime.textContent = sessionMinutes;
    minutes.textContent = sessionMinutes;
    min = sessionMinutes;
    if(sessionMinutes==1){
        sessionDown.disabled = true
    }
    sessionUp.disabled = false;
})

play.addEventListener('click',(e)=>{
    breakDown.disabled = true;
    breakUp.disabled = true;
    sessionUp.disabled = true;
    sessionDown.disabled = true;
    play.disabled = true;
    e.preventDefault();
    isPaused = false;
    pause.disabled = false;
})

pause.addEventListener('click',(e)=>{
    e.preventDefault();
    isPaused = true;
    play.disabled = false;
    pause.disabled = true;
})
stop.addEventListener('click',(e)=>{
    e.preventDefault();
    isPaused = true;sessionTime.textContent = sessionMinutes;
    sessionTimes = 1;
    breakTimes = 1;
    
    setTimer();
    person++;
    breakDown.disabled = false;
    breakUp.disabled = false;
    sessionUp.disabled = false;
    sessionDown.disabled = false;
    play.disabled = false;    
})
swich.addEventListener('click',(e)=>{
    e.preventDefault()
    isPaused = true;
    sessionTimes = 1;
    breakTimes = 1;
    setTimer();
    play.disabled = false;    
})
var t = window.setInterval(function() {
    if(!isPaused){
        if(min >= 0){
            second -= 1
            if(second == 0){
                if (min >=1){
                second = 59;
                min -= 1
                }
                //min -= 1;
                if(min < 10){
                    minutes.textContent = "0" + min;
                }else{
                    minutes.textContent = min;
                }
            }
            if(second < 10){
                
                seconds.textContent = "0" + second;
            }else{
                seconds.textContent =second;
            }
            
        }
    }
    if(min==0&&second==0){
        isPaused=true;
        person++;
        setTimer();
        isPaused=false;
    }
    
  }, 1000);