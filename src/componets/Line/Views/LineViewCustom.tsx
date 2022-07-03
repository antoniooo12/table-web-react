import React, {useMemo} from 'react';
import {CellCustomContext} from "../../Column/Cell/Custom/CellCustomContext";
import {TLine} from "../Line";
import {useInnerTable} from "../../TableWeb/InnerTableConnector/InnerTableConnector";
import {useCellAggregatorService} from "../../Column/Cell/useCellAgregatorService";
import {recursiveMapSearch} from "../../../hellpers/helpers";
import {useTableWebContext} from "../../TableWeb/TableWebContext";
import {TCell, TCell2} from "../../Column/Cell/cellTypes";
import {useCustomContext} from "../../TableWeb/customContext";
import {useActionsTable} from "../../../hooks/useActionsTable";
import {setCellValue} from "./utils";

export type TToCell = { setValue: (val: any) => void }
const LineViewCustom: React.FC<TLine> = (props) => {
    const {innerTableMap} = useInnerTable()
    const {customLine} = useCustomContext()

    const {columns, viewMode} = useTableWebContext()
    const {tableChangeCell} = useActionsTable()
    const CustomLineView = useMemo(() => {
        if (viewMode === 'table' ) {
            return customLine.table
        } else {
            if(!customLine.innerTable){
                throw  new Error('We can`t get a custom line to inner table')
            }
            return customLine.innerTable
        }
    }, [viewMode])
    const cellMap: Map<string, TCell2<unknown>> = [...props.columnsData.values()].reduce((accum, col) => {
        const cellParam = recursiveMapSearch(columns, col.nameColumn, 'subColumns').cellParam
        const setterToRedux = setCellValue(tableChangeCell)(props.lineData.id, col.nameColumn)
        const cell2: TCell2<any> = {
            setExternalValue: setterToRedux,
            cellParam: cellParam,
        }
        const subColumns = col.subColumns
        if (subColumns) {
            [...subColumns.values()].forEach((col) => {
                const setterToRedux = setCellValue(tableChangeCell)(props.lineData.id, col.nameColumn)
                const cell2: TCell2<any> = {
                    setExternalValue: setterToRedux,
                    cellParam: cellParam,
                }
                accum.set(col.nameColumn, cell2)
            })
        }
        accum.set(col.nameColumn, cell2)
        return accum

    }, new Map())
    console.log(cellMap)
    return (
        <>
            <CellCustomContext.Provider
                value={{
                    lineInformation: {
                        lineInformation: props.lineData,
                        columns: props.columnsData,
                        innerTableInformation: innerTableMap
                    },
                    cellInformationMap: cellMap,
                }}
            >
                <>
                    {customLine && <CustomLineView {...props}/>}
                </>
            </CellCustomContext.Provider>
        </>

    );
};

export {LineViewCustom};
