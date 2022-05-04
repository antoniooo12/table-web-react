import {ChangeEvent} from "react";

export const useOnChangeSelect = (setter: (str: string)=> void)=> (e:  ChangeEvent<HTMLSelectElement>)=>{
    console.log(e)
    setter(e.target.value)
}
