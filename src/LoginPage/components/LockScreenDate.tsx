import React, {useState, useEffect} from "react";



interface DateProps {
    offScreen : boolean
}


//make offscreen state

export default function LockScreenDate(props : DateProps){

    const [date, setDate] = useState(new Date());




    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    function addZero(n : number){
        if(n < 10){
            return "0" + n.toString();
        }
        return n.toString();
    }



        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let hour : string = addZero(date.getHours());
        let min : string = addZero(date.getMinutes());

        if(props.offScreen){
            return (
                <div></div>
            );
        }
        return (
            <div className={"absolute h-screen w-screen text-white font-segoe"}>
                <div className={"select-none absolute left-10 bottom-20"}>
                    <div className={"text-9xl"}>{hour + ":" + min}</div>
                    <div className={"text-5xl"}>{weekday[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()]}</div>
                </div>
            </div>
        );
}
