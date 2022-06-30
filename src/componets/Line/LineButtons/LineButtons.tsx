import React, {useContext, useEffect, useState} from 'react';
import {ButtonGroup, TButtonGroupStyle} from "../../buttons/Button/ButtonGroup/ButtonGroup";
import {LineContext} from "../LineContext";
import {useActionsTable} from "../../../hooks/useActionsTable";
import {TableWebContext} from "../../TableWeb/TableWebContext";
import {useGetButtonGroupsStyle, useGetButtonsStyle} from "../../../utils/buttonUtils";
import {TButton} from "../../buttons/Button/Button";
import {useInnerTable} from "../../TableWeb/InnerTableConnector/InnerTableConnector";

const LineButtons = () => {
    const {bigPictureController, viewMode} = useContext(TableWebContext)
    const {innerTableMap, isShowInnerTableController: {setIsShowInnerTable, isShowInnerTable}} = useInnerTable()
    const {lineInformation:{id, wasEdit, toDelete, status}} = useContext(LineContext)
    const buttonsAutomationStale = useGetButtonsStyle()
    const buttonsStyle: TButton = {
        ...buttonsAutomationStale,
        style: viewMode === 'innerTable' ? {
            padding: 0
        } : {}
    }
    const buttonAutomationGroupsStyle = useGetButtonGroupsStyle()
    const buttonGroupsStyle: TButtonGroupStyle = {
        ...buttonAutomationGroupsStyle,
        style: {
            borderRadius: 0
        }
    }
    const {tableDeleteLine} = useActionsTable()
    const {setSelectedLineIdToBigPicture} = bigPictureController
    const onDelete = () => {
        tableDeleteLine({lineId: id, status})
    }
    const [c, sC] = useState(0)
    useEffect(() => {
        // innerTableMap?.subscribe(()=> {sC(prevState => prevState++)})
        // console.log(innerTableMap?.getState().tableStore.storage.data)
    }, [c])
    // const s = l && l(state => state.tableStore.storage)

    const {tableSetEditableLine} = useActionsTable()
    const onEdit = () => {

        console.log('00000')
        console.log(innerTableMap)
        console.log('fffffffff')

        tableSetEditableLine({lineId: id})
    }
    const onMore = () => {
        setSelectedLineIdToBigPicture(id)
    }
    const onShowInnerTable = () => {
        setIsShowInnerTable(!isShowInnerTable)
    }
    return (
        <ButtonGroup buttonGroupMode={buttonGroupsStyle} buttonsMode={buttonsStyle}>
            <ButtonGroup.Button onClick={onDelete}>
                <ButtonGroup.SvgDelete/>
            </ButtonGroup.Button>
            <ButtonGroup.Button onClick={onEdit}>
                <ButtonGroup.SvgEdit/>
            </ButtonGroup.Button>
            {/*<ButtonGroup.Button onClick={onMore}>*/}
            {/*    <ButtonGroup.SvgMore/>*/}
            {/*</ButtonGroup.Button>*/}
            {viewMode === 'table' && <ButtonGroup.Button onClick={onShowInnerTable}>
                <ButtonGroup.SvgFabric svgName={'SvgArrowDown'}/>
            </ButtonGroup.Button>}
        </ButtonGroup>
    )
};

export {LineButtons};
