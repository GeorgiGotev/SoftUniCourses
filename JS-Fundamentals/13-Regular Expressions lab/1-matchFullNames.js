function matchNames(input){
 let regex=/\b[A-Z][a-z]+\ [A-Z][a-z]+\b/g;
 let text=input;
 console.log(text.match(regex).join(' '));
}
matchNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");