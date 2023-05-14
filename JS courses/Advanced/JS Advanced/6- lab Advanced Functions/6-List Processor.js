// function solve(arr){
//     let result=[];
//     arr.forEach(element => {
//         let [command, text]=element.split(' ');
//         if(command==='add'){
//             result.push(text);
//         }else if(command==='remove'){
//             while(result.includes(text)){
//                 let index=result.indexOf(text);
//                 result.splice(index,1);
//             }
//         }else if(command==='print'){
//             console.log(result.join(','));
//         }
//     });
// }

function solve(commands) {
    let commandProcessor = (function () {
       let list = [];
        return {
            add: newItem => list.push(newItem),
            remove: item => list = list.filter(el => el != item),
            print: () => console.log(list.join(','))
        }
    })();

    for(let cmd of commands){
        [cmdName, arg] = cmd.split(" ");
        commandProcessor[cmdName](arg);
    }
}


solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);