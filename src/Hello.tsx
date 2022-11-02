import { useState } from "react";
interface HelloProps{
    name: string;
    age?: number; // ? valinnainen
}
function Hello(props: HelloProps){
    const [message, setMessage] = useState('');

    return(
        <>Hello {props.name}</>
    )
}

export default Hello;