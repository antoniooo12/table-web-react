import React from 'react';
import checkboxStyle from './Checkbox.module.scss'
import {TCell} from "../cellTypes";
import {useTest} from "../cellHooks";
import clsx from "clsx";

const CellBoolean: React.FC<TCell<boolean>> = ({setExternalValue, externalValue, additionalParams}) => {
    const setter = setExternalValue((v) => v)

    const [innerValue, setValue] = useTest<boolean>(setter, externalValue)


    return (
        <div
            onClick={() => setValue(!innerValue)}
            className={clsx(checkboxStyle.checkbox)}
        >
            {externalValue && <div className={checkboxStyle.icon}>
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M17.5782 0.69642C18.0369 1.02861 18.137 1.6664 17.8018 2.12097L8.3994 13.8731C7.8261 14.6506 6.67908 14.7157 6.02002 14.008L0.272778 7.83719C-0.112528 7.42349 -0.0864982 6.77855 0.330916 6.39667C0.74833 6.01479 1.39906 6.04058 1.78437 6.45429L7.10745 12.1697L16.1409 0.918016C16.4761 0.463446 17.1196 0.364234 17.5782 0.69642Z"
                          fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M17.5782 0.69642C18.0369 1.02861 18.137 1.6664 17.8018 2.12097L8.3994 13.8731C7.8261 14.6506 6.67908 14.7157 6.02002 14.008L0.272778 7.83719C-0.112528 7.42349 -0.0864982 6.77855 0.330916 6.39667C0.74833 6.01479 1.39906 6.04058 1.78437 6.45429L7.10745 12.1697L16.1409 0.918016C16.4761 0.463446 17.1196 0.364234 17.5782 0.69642Z"
                          fill="#203EDF" fill-opacity="0.3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M17.5782 0.69642C18.0369 1.02861 18.137 1.6664 17.8018 2.12097L8.3994 13.8731C7.8261 14.6506 6.67908 14.7157 6.02002 14.008L0.272778 7.83719C-0.112528 7.42349 -0.0864982 6.77855 0.330916 6.39667C0.74833 6.01479 1.39906 6.04058 1.78437 6.45429L7.10745 12.1697L16.1409 0.918016C16.4761 0.463446 17.1196 0.364234 17.5782 0.69642Z"
                          fill="white" fill-opacity="0.05"/>
                </svg>

            </div>}
        </div>
    );
};

export {CellBoolean};