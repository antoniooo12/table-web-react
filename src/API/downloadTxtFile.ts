import {TTableLine} from "../redux/reduxTypes";

export enum EnumOptionsDownloadTxtFile {
    toSave = 'toSave',
    toSaveExcept ='toSaveExcept',
}

type TTableOptions = { type:  EnumOptionsDownloadTxtFile.toSave | EnumOptionsDownloadTxtFile.toSaveExcept, fields: string[] }

export const downloadTxtFile = (data: TTableLine[], options?: TTableOptions) => {

    const element = document.createElement("a");
    const tableData = data
        .map(line => {
            const convertedLines = [...line.columns.values()].map(item => item)
            if (options)
                switch (options.type) {
                    case EnumOptionsDownloadTxtFile.toSave: {
                        return convertedLines.filter(item => options.fields.includes(item.nameColumn))
                    }
                    case EnumOptionsDownloadTxtFile.toSaveExcept:{
                        return convertedLines.filter(item => !options.fields.includes(item.nameColumn))
                    }
                    default:
                        return convertedLines
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