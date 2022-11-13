function paiting(imput){
    let nylon=Number(imput[0]);
    let paint=Number(imput[1]);
    let thinner=Number(imput[2]);
    let hours=Number(imput[3]);

    let sumNylon=(nylon+2)*1.5;
    let sumPaint=((paint*1.1)*14.5);
    let sumThinner=thinner*5
    let bagPrice=0.4
    let sumAll=sumNylon + sumPaint + sumThinner + bagPrice
    let finalpriceM=sumAll*0.3*hours
    let sum=finalpriceM+sumAll

    console.log(sum)
}

paiting(["10 ","11 ","4 ","8 "]);