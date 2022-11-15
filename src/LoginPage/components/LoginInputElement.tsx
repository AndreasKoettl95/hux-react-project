import React, {useState} from "react";


interface LoginInputProps {
    callback(value : string) : void,
    resetCallback() : void,
    name: string;
    isPassword: boolean;
    loginFailed : boolean;
}



export default function LoginInputElement (props : LoginInputProps) {
    //private hidden : boolean = false;

    const [value, setValue] = useState(props.name);

    function handleChange(event : React.FormEvent<HTMLInputElement>) {
        setValue(event.currentTarget.value);
        props.callback(event.currentTarget.value);
    }

    function handleFocus(event: React.FormEvent<HTMLInputElement>) {
        if(props.loginFailed){
            props.resetCallback();
        }
        if(value == props.name){
            if(props.isPassword){
                event.currentTarget.type = "password";
            }
            setValue("");
        }
        event.currentTarget.className = "px-2 text-black text-opacity-70 border-0 bg-white bg-opacity-90";
    }



    function handleBlur(event: React.FormEvent<HTMLInputElement>) {
        if(value === '' ||  value === ' '){
            event.currentTarget.type = "text";
            setValue(props.name);
        }

        event.currentTarget.className = "px-2 text-sky-100 text-opacity-75 border-2 border-sky-100 border-opacity-75 bg-black bg-opacity-70";
    }

    let className : string = "px-2 text-sky-100 text-opacity-75 border-2 border-sky-100 border-opacity-75 bg-black bg-opacity-70";
    if(props.loginFailed){
        className = "px-2 text-sky-100 text-opacity-75 border-2 border-sky-100 border-opacity-75 bg-red-500 bg-opacity-70";
    }

    return (

        <input className={className} type={"text"}
               value={value}
               onChange={handleChange}
               onFocus={handleFocus}
               onBlur={handleBlur}
          />

    );
}


