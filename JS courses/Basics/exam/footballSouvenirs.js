    function footballSouvenirs(input) {
    let team = input[0];
    let souvenirs = input[1];
    let num = Number(input[2]);
    let sum = 0;

    switch (team) {
        case "Argentina":
        if (souvenirs === "flags") {
            sum = num * 3.25;
        } else if (souvenirs === "caps") {
            sum = num * 7.25;
        } else if (souvenirs === "posters") {
            sum = num * 5.1;
        } else if (souvenirs === "stickers") {
            sum = num * 1.25;
        } 
        break;
        case "Brazil":
        if (souvenirs === "flags") {
            sum = num * 4.2;
        } else if (souvenirs === "caps") {
            sum = num * 8.5;
        } else if (souvenirs === "posters") {
            sum = num * 5.35;
        } else if (souvenirs === "stickers") {
            sum = num * 1.2;
        } 
        break;
        case "Croatia":
        if (souvenirs === "flags") {
            sum = num * 2.75;
        } else if (souvenirs === "caps") {
            sum = num * 6.9;
        } else if (souvenirs === "posters") {
            sum = num * 4.95;
        } else if (souvenirs === "stickers") {
            sum = num * 1.1;
        } 
        break;
        case "Denmark":
        if (souvenirs === "flags") {
            sum = num * 3.1;
        } else if (souvenirs === "caps") {
            sum = num * 6.5;
        } else if (souvenirs === "posters") {
            sum = num * 4.8;
        } else if (souvenirs === "stickers") {
            sum = num * 0.9;
        } 
        
        break;
        
    }
    if(team==="Argentina"|| team==="Brazil" || team==="Croatia" || team==="Denmark"){
    console.log(`Pepi bought ${num} ${souvenirs} of ${team} for ${sum} lv.`);
}else{
    console.log("Invalid country!");
}
    if(souvenirs===)
    }
footballSouvenirs(["Brazil", "stickers", "5"]);
