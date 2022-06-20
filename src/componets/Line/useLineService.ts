import {CSSProperties, useContext, useEffect, useMemo, useState} from "react";
import {TableReduxStructure, TStatus} from "../../redux/reduxTypes";
import {TableWebContext} from "../TableWeb/TableWebContext";
import {useActionsTable} from "../../hooks/useActionsTable";
import {TLine} from "./Line";
import {useEffectSkipMount} from "../../hooks/utils";
import {useGetWidth} from "./utils/utils";
import clsx from "clsx";
import cl from "./Line.module.scss";
import {useInnerTableConnectorService} from "../TableWeb/InnerTableConnector/useInnerTableConnectorService";

export const useUpdateCustomFunction = (lineId: string, status: TStatus, innerTableData: TableReduxStructure | undefined) => {
    const tableWebContext = useContext(TableWebContext)
    const {tableChangeCell} = useActionsTable()
    const {customFunctionMap, viewMode} = tableWebContext
    useEffectSkipMount(() => {
        if (customFunctionMap) {
            [...customFunctionMap.entries()].forEach(([nameCell, funcBody]) => {
                const func = funcBody.onUpdate
                if (func) {
                    const value = func({innerTableMap: innerTableData, tableWebContext})
                    tableChangeCell({lineId, value, nameCell, status})
                }
            })
        }

    }, [innerTableData])
}

const useIsShowInnerTableController = () => {
    const {shield: {innerTable}} = useContext(TableWebContext)
    const [isShowInnerTable, setter] = useState(false)
    const setIsShowInnerTable = () => {
        if (innerTable) {
            setter(!isShowInnerTable)
        }
    }

    return {isShowInnerTable, setIsShowInnerTable}
}

export const useLineService = (props: TLine) => {
    const {lineData, lineIdt} = props
    const {columns} = useContext(TableWebContext)
    const {width, widthGrid} = useGetWidth(columns)

    const isShowInnerTableController = useIsShowInnerTableController()
    const styleGrid: CSSProperties = {
        gridTemplateColumns: widthGrid,
        width,
    }

    const lineBaseClass: string = clsx({
        [cl.wrapper]: true,
        [cl.allLine]: lineData.status === 'isAll',
        [cl.newLine]: lineData.status === 'isNew',
    })

    const {setInnerTable, innerTableMap} = useInnerTableConnectorService()
    useUpdateCustomFunction(lineIdt, props.status, innerTableMap)

    return {
        lineBaseClass,
        styleGrid,
        innerTable: {
            setInnerTable, innerTableMap,
            isShowInnerTableController,
        }

    }
}