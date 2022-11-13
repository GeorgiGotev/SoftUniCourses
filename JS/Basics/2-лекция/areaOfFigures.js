function areaOfFigures(imput){
    let figure = imput [0];
    let a = Number (imput[1]);
    let b = Number (imput[2]);

    if(figure === "square"){
        console.log((a * a).toFixed(3));
    }else if(figure === "rectangle"){
        console.log((a*b).toFixed(3));
    }else if(figure==="circle"){
        console.log((Math.PI*a*a));
    }else if(figure==="triangle"){
        console.log((a*b/2).toFixed(3));
    }


}

areaOfFigures(["rectangle","7","2.5"]);