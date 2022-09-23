const xl = require('exceljs');
const fs = require('fs');

async function main() {
    const arr = []
    const csvPath = './vitalik WL.xlsx';
    const workbook = new xl.Workbook();
    await workbook.xlsx.readFile(csvPath);
    const worksheet = workbook.getWorksheet(1);
    worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
        const addLink = row.values[1].hyperlink
        const addr = addLink.replace('https://etherscan.io/address/', '')
        console.log(addr)
        arr.push(addr)
    });
    fs.writeFile('vitalik.json', JSON.stringify(arr), function (err) {
        if (err) {
            console.log(err)
        }
    });
    console.log(arr.length)
}
main()
