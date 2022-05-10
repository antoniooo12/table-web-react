import {Item, TTableLine} from "../redux/reduxTypes";
import {filterParams, filterR} from "../hellpers/helpers";
import {absurd} from "fp-ts/function";

export enum EnumOptionsDownloadTxtFile {
    toSave = 'toSave',
    toSaveExcept = 'toSaveExcept',
}

type TColumnsToDownload = { type: EnumOptionsDownloadTxtFile.toSave | EnumOptionsDownloadTxtFile.toSaveExcept, fields: string[] }

export type PropertyToSave = { type: 'options', params: Array<keyof Item<unknown>> } | { type: 'all' }
type TTDownloadParams = {
    propertyToSave?: PropertyToSave
}


export const downloadTxtFile = (data: TTableLine[], options?: { params?: TTDownloadParams, columns?: TColumnsToDownload }) => {
    const element = document.createElement("a");

    const tableData = data
        .map(line => {
            return {
                lineInformation: line.lineInformation,
                columns: [...line.columns.values()],
            }
        })
        .map(line => {
            const convertedLine = line.columns
            if (options) {
                if (options.columns) {
                    const items = filterR(convertedLine)
                    const fields = options.columns.fields
                    switch (options.columns.type) {
                        case EnumOptionsDownloadTxtFile.toSave: {
                            const filteredColumns = items((item) => fields.includes(item.nameColumn))
                            return {
                                ...line,
                                columns: filteredColumns,
                            }
                        }
                        case EnumOptionsDownloadTxtFile.toSaveExcept: {
                            const filteredColumns = items((item) => !fields.includes(item.nameColumn))
                            return {
                                ...line,
                                columns: filteredColumns,
                            }
                        }
                        default: {
                            absurd(options.columns.type)
                        }
                    }
                }
            }

            return line
        })
        .map(line => {
            if (options) {
                if (options.params && options.params.propertyToSave) {
                    switch (options.params.propertyToSave.type) {
                        case "options": {
                            const filteredColumns = filterParams<Item<unknown>>(options.params.propertyToSave.params)(line.columns)
                            return {
                                ...line,
                                columns: filteredColumns,
                            }
                        }
                        case "all": {
                            return line
                        }
                        default:
                            absurd(options.params.propertyToSave)
                    }
                }
            }
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