function extractFile(input) {
    let filePlusExtension = input.split('\\').pop()

    const lastComa = filePlusExtension.lastIndexOf('.');
    const fileName = filePlusExtension.substring(0, lastComa);
    const extension = filePlusExtension.substring(lastComa + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);



}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.bak');