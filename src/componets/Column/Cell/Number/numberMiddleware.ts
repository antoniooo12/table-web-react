import {InputAdditionalParamsNumber} from "../../../../types/TableStructure";

export const numberMiddleware = (additionalParams: InputAdditionalParamsNumber) => (value: number) => {
    if (value > additionalParams.max) {
        return additionalParams.max
    } else if (value < additionalParams.min) {
        return additionalParams.min
    }

    return value
}