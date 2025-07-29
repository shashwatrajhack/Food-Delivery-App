import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    const [onlineStatus,setOnlineStatus] = useState(true);
    //check if online

    useEffect(()=>{

        window.addEventListener("Offline",()=>{
            setOnlineStatus(false);
        });

        window.addEventListener("Online",()=>{
            setOnlineStatus(true);
        });

    },[])

    //boolean value

    return onlineStatus;

}

export default useOnlineStatus;