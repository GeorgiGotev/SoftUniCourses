function depositCalculator(imput){

    let deposit=Number(imput[0]);
    let time=Number(imput[1]);
    let perc=Number(imput[2]);

    let sum=deposit+time*((deposit*perc/100)/12);

    console.log(sum);

}
depositCalculator(["200","3","5.7"])