
import React from "react"
import {useState ,useRef} from "react"
import './Watch.css'

 function Watch() {

    const [time , setTime] = useState(0);
    const [isRunning , setisRunning] = useState(false);
 
   const startinterval = useRef(0);
   const timer = useRef(0);


   const formattime = (time)  => {

     const hours = Math.floor(time / 3600000);
     const minutes = Math.floor((time % 3600000) / 60000);
     const seconds = Math.floor((time % 60000) / 1000);
     const ms = Math.floor((time % 1000) / 10);
     const pad = (num) => num < 10 ? `0${num}` : num;

     return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(ms)}`;   }


   function start(){

     setisRunning(true);

        startinterval.current = Date.now() -time;

        timer.current = setInterval ( () => {
              setTime(Date.now() - startinterval.current);
        },10); 
    

}

function stop(){
    setisRunning(false);
    clearInterval(timer.current);
}

const reset = () => {
    setisRunning(false);
    clearInterval(timer.current);
    setTime(0);
}
   


    return (<div className="watch">
    
     <div className="timerdisplay">{formattime(time)}</div>
     <div className="buttons">
     <button onClick={start} disabled={isRunning} className="btn" id="start">Start</button>
     <button onClick={stop} disabled={!isRunning} className="btn" id="stop">Stop</button>
     <button onClick={reset} className="btn" id="reset">Reset</button>
     </div>
     </div>);
}
export default Watch;