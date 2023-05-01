function solve(num,o1,o2,o3,o4,o5){
    num=Number(num);
    
    modify(num,o1);
    modify(num,o2);
    modify(num,o3);
    modify(num,o4);
    modify(num,o5);

    function modify(number,curr){
        
        switch(curr){
            case 'chop': num=num/2 ;break;
            case 'dice': num=Math.sqrt(num);break;
            case 'spice':num+=1 ;break;
            case 'bake':num*=3 ;break;
            case 'fillet':num=(num*0.8).toFixed(1) ;break;
        }
        console.log(num);
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');