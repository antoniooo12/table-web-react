import {createContext} from "react";
import {TLine, TLineData} from "./Line";

type LineContext = TLineData

export const LineContext = createContext<LineContext>({
} as TLineData)