// setTimeOut - hành động sau bao nhiêu ms
// setInterval - lặp lại hành động sau bao nhiêu ms 

let i = 0;

const timer = setInterval(function(){
    i = i + 1;
    console.log(`i now: ${i}`);
}, 1000);

setTimeout( () => {
     clearInterval(timer);
     console.log("timer stop");
}, 5000);
