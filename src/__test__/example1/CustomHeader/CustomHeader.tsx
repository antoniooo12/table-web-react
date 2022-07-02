import React from 'react';
import {TCustomHeader} from "../../../API/TableWebAPITypes";
import {useTableHeaderService} from "../../../componets/Header/TableHeader/useTableHeaderService";
import {TTableHeaderBlock} from "../../../componets/Header/TableHeader/TableHeaderTypes";

const CustomHeaderLine: React.FC<{ line: TTableHeaderBlock[] }> = ({line}) => {
    return <tr>
        {line.map(HBlock =>
            <td style={{width: `${HBlock.width}px`}} colSpan={HBlock.colSpan}>
                {HBlock.title}
            </td>
        )}
    </tr>
}

const CustomHeader: TCustomHeader = () => {
    const {columnsTemplate, sectionTemplate} = useTableHeaderService()
    return (
        <thead>
        <CustomHeaderLine line={sectionTemplate}/>
        <CustomHeaderLine line={columnsTemplate}/>
        </thead>
    );
};

export {CustomHeader};
