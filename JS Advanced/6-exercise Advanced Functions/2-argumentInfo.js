function solve(){
    let data={};

    Array.from(arguments).forEach(element=>{
        let type=typeof element;
        console.log(`${type}: ${element}`);
        if(!data[type]){
            data[type]=0;
        }
            data[type]+=1 ;
        
    });
    let sorted=Object.entries(data).sort((a,b)=>b[1]-a[1]);
    
    for (const [key,value] of sorted) {
       console.log(`${key} = ${value}`);
    }
}
solve('cat', 42,52, function () { console.log('Hello world!'); })