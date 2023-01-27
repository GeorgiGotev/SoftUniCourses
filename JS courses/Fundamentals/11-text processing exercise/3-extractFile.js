function extractFile(input) {


    let result = input.split('\\').pop()
    let final = result.split('.')
    let last = final.pop();
    console.log(`File name: ${final.join('.')}`);
    console.log(`File extension: ${last}`);



}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.bak');