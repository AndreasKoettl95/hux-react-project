import React from "react";




interface BackGroundProps {
    blurred : boolean,
}

let pickedBg : boolean = false;
let maxIndex : number = 5;
let minIndex : number = 1;
let randImageIndex : number = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex ;


export default function LockScreenBackground (props : BackGroundProps){


        let bgCss : string = '';

        switch (randImageIndex) {
            case 1:
                bgCss = "absolute flex items-center justify-center h-screen bg-cover bg-center bg-lockscreen-background-1";
                break;
            case 2:
                bgCss = "absolute flex items-center justify-center h-screen bg-cover bg-center bg-lockscreen-background-2";
                break;
            case 3:
                bgCss = "absolute flex items-center justify-center h-screen bg-cover bg-center bg-lockscreen-background-3";
                break;
            case 4:
                bgCss = "absolute flex items-center justify-center h-screen bg-cover bg-center bg-lockscreen-background-4";
                break;
            case 5:
                bgCss = "absolute flex items-center justify-center h-screen bg-cover bg-center bg-lockscreen-background-5";
                break;
        }




        if(props.blurred){
            return (
                <div className={bgCss} >
                    <div className={"h-screen w-screen backdrop-blur-sm"}></div>
                </div>
            );
        }

        return (

            <div className={bgCss} >
                <div className={"h-screen w-screen"}></div>
            </div>
        );
}

