function destination(input){
    let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/gm
    let destinations=[];
    let sum=0;

    let find = pattern.exec(input);
    while(find){
        destinations.push(find.groups.destination);
        sum+=find.groups.destination.length;
        find=pattern.exec(input);
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${sum}`);
}
destination("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");