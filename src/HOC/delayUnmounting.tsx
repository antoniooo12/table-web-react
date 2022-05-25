import React, {useEffect} from "react";

export function delayUnmounting(Component: React.FC) {
    const innerComponent: React.FC<{delayTime: number}> = ({delayTime}) => {
        return <>
            {Component}
        </>
    }
    return ()=>{
        useEffect(()=>{
            return ()=>{

            }
        },[])
    }
}