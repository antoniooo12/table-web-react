import {Item, TTableLine} from "../redux/reduxTypes";
import {debug, filterParams, filterR} from "../hellpers/helpers";
import {pipe} from "fp-ts/function";

export enum EnumOptionsDownloadTxtFile {
    toSave = 'toSave',
    toSaveExcept = 'toSaveExcept',
}

type TColumnsToDownload = { type: EnumOptionsDownloadTxtFile.toSave | EnumOptionsDownloadTxtFile.toSaveExcept, fields: string[] }

type TTDownloadParams = {
    propertyToSave?: Array<keyof Item<unknown>>
}


export const downloadTxtFile = (data: TTableLine[], options?: { params?: TTDownloadParams, columns?: TColumnsToDownload }) => {
    const element = document.createElement("a");
    const tableData = data
        .map(line => {
            const convertedLine = [...line.columns.values()]
            if (options) {
                if (options.columns) {
                    const items = filterR(convertedLine)
                    const fields = options.columns.fields
                    switch (options.columns.type) {
                        case EnumOptionsDownloadTxtFile.toSave: {
                            return pipe(items((item) => fields.includes(item.nameColumn)), filterParams(options.params?.propertyToSave), debug())
                        }
                        case EnumOptionsDownloadTxtFile.toSaveExcept: {
                            return items((item) => fields.includes(item.nameColumn))
                        }
                        default:
                            return convertedLine
                    }
                } else if (options.params) {
                    return filterParams<Item<unknown>>(options.params.propertyToSave)(convertedLine)
                }
            }
            return convertedLine
        })
    const toFile = JSON.stringify(tableData)
    const file = new Blob([toFile], {
        type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.json";
    document.body.appendChild(element);
    element.click();
};