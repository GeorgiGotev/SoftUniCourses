function solve(arr) {
    // let counter = 0;
    // let result = [];
    // for (const command of arr) {
    //     counter++
    //     if (command === 'add') {
    //         result.push(counter);
    //     } else {
    //         result.pop();
    //     }
    // }
    // if (result.length) {
    //     console.log(result.join('\n'));
    // }else{
    //     console.log('Empty');
    // }







    // let num=1;
    // let result=[];
    // arr.forEach(command => {
    //     if(command==="add"){
    //         result.push(num)
    //     }else{
    //         result.pop();
    //     }
    //     num++;
    // });
    // result.length>=1 ? console.log(result.join('\n')) : console.log('Empty');




    //try with dictionary
    let result=[];
    let num=1;
    let dictionary={
        add: (x)=>result.push(x),
        remove: (x)=>result.pop(),
    }

    arr.forEach(command => {
        dictionary[command](num);
        num++;
    });
    
    result.length>=1 ? console.log(result.join('\n')) : console.log('Empty');



}
solve(['add',
    'add',
    'remove',
    'add',
    'add']
);