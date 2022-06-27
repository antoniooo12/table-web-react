import {TableExternalShieldData} from "../../../API/TableWebAPITypes";
import {EColumns2} from "./tableStructure";

export const exampleExternalData2: TableExternalShieldData = [
    {
        columns: [{
            value: 'Помідорки коктельні Аравія',
            nameColumn: EColumns2.title,
            id: '1',
        }, {
            value: 23.2,
            nameColumn: EColumns2.cost,
            id: '1',
        }, {
            value: 2.3,
            nameColumn: EColumns2.count,
            id: '1',
        }, {
            value: 'кг',
            nameColumn: EColumns2.type,
            id: '1',
        }],
        lineInformation: {
            id: '1'
        }
    }, {
        columns: [{
            value: 'Кавун херсонский',
            nameColumn: EColumns2.title,
            id: '2',
        }, {
            value: 4.2,
            nameColumn: EColumns2.cost,
            id: '2',
        }, {
            value: 12.3,
            nameColumn: EColumns2.count,
            id: '2',
        }, {
            value: 'кг',
            nameColumn: EColumns2.type,
            id: '2',
        }],
        lineInformation: {
            id: '2'
        }
    },
]
