import React, {useEffect, useState} from "react";
import {queries} from "@testing-library/react";


//
export interface ConfigDataProps{
    userName : string,
    theme : string,
    backGround : string
}


export interface LoginProps{
    username : string,
    password : string,
    callback(data : (ConfigDataProps | null)) : void
}

export default function Login(props: LoginProps) {
    const token : string = "a9735d3307b8847d3535c79eef241a07399758035598dd648ce84de49b1131937693afd0d4f3797de8ef6f2bfa4175f37b450f8b9ef5808bee50d3075eda83c66884f8c1cdecb4364484dc675a6458b6b12f9d5b7332b19a9f00f14e4527039f4b94f6f56324a9823c26107f0162848fb5689559520ecd983b21bb89092aec3b";
    const apiLink : string = "http://localhost:1337/api/";

    let confData : (ConfigDataProps | null) = null;



    //const [data, setData] = useState("");

    const dataFetch = async () => {
        let found : boolean = false;
        const data = await (
            await fetch(
                apiLink + "accounts", {
                    method: 'GET', headers: {
                        Authorization:
                            'Bearer ' + token,
                        },
                    }
            )
        ).json();

        for(let i = 0; i < data["data"].length; i++){
            if(data["data"][i]["attributes"]["password"] === props.password){
                //fetch
                const cData = await (
                    await fetch(
                        apiLink + "config-datas", {
                            method: 'GET', headers: {
                                Authorization:
                                    'Bearer ' + token,
                            },
                        }
                    )
                ).json();

                for(let x = 0; x < cData["data"].length; x++){
                    if(cData["data"][x]["attributes"]["username"] === props.username){

                        let c : ConfigDataProps = {
                            userName : cData["data"][x]["attributes"]["username"],
                            theme : cData["data"][x]["attributes"]["theme"],
                            backGround : cData["data"][x]["attributes"]["background"],
                        }


                        props.callback(c);
                        found = true;
                        return;
                    }
                }
            }

        }

        console.log("Login Unsuccessfull");
        props.callback(null);
        return;
    };


    dataFetch();



}