function schoolMaterials(imput){
    let pens= Number (imput[0]);
    let markers = Number (imput[1]);
    let liters = Number (imput[2]);
    let discount = Number (imput[3]);

    let sumPens=pens*5.80;
    let sumMarkers= markers*7.20;
    let sumLiters = liters*1.20;
    
    let sum=sumPens+sumMarkers+sumLiters;
    let sumAfterDisc=sum-(sum*discount/100);

    console.log(sumAfterDisc)
}

schoolMaterials(["2 ","3 ","4 ","25 "]);