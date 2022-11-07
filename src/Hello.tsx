import { useState } from "react";
interface HelloProps{
    name: string;
    age?: number; // ? valinnainen
}
function Hello(props: HelloProps){
    const [message, setMessage] = useState('How you doin?');

    return(
        <>Hello {props.name}. {message}</>
    )
}

export default Hello;