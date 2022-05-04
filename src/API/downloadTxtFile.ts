import {TTableLine} from "../redux/reduxTypes";

export const downloadTxtFile = (data: TTableLine[]) => {
    const element = document.createElement("a");
    const tableData = data.map(line => {
        return [...line.columns.values()].map(item => item)
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