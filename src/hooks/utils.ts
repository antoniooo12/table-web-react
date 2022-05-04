import {useEffect, useRef} from "react";


export function useEffectSkipMount<T extends Function, S extends any[]>(fn: T, inputs: S) {
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) {
            return fn();
        }
        didMountRef.current = true;
    }, [...inputs]);
}