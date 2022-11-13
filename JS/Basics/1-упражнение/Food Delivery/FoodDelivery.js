function foodDelivery(imput){

    let chickenMenu = Number (imput[0]);
    let fishMenu = Number (imput[1]);
    let vegiMenu = Number (imput[2]);
    let priceChickenMenu = chickenMenu * 10.35;
    let priceFishMenu = fishMenu * 12.40;
    let priceVegiMenu = vegiMenu * 8.15;
    let priceAllMenu = priceChickenMenu + priceFishMenu + priceVegiMenu;
    let priceDessert = priceAllMenu * 0.2;
    let priceDelivery = 2.50;
    let summAll = priceAllMenu + priceDelivery + priceDessert;

    console.log(summAll);



}

foodDelivery(["2 ","4 ","3 "])