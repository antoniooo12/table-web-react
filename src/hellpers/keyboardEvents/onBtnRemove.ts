import {pipe} from "fp-ts/function";
import * as E from 'fp-ts/lib/Either'
import Either = E.Either;
import {checkBtnPressed} from "./btnBaseFunctions";
import {checkLengthP} from "../string/stringBaseFunctions";


export const onBtnRemoveF = (btnCode: string) => (str: string) => (setter: (str: string) => void) => {
    const isCorrectBtnP = checkBtnPressed('Backspace')(btnCode)
    const strE = E.fromNullable(new Error(''))(str)
    pipe(strE,
        E.chain(isCorrectBtnP),
        E.chain(checkLengthP(1)),
        E.fold((error) => (setter(str)),
            () => (setter(''))
        )
    )
}


