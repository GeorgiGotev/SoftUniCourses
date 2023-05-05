// function solve() {
//    let addButtonElements = document.querySelectorAll('.add-product');
//    let checkoutElement=document.querySelector('.checkout');
//    let outputElement=document.querySelector('textarea');

//    let productsCart=[];
//    let sum=0;

//    Array.from(addButtonElements).forEach(element => {
//       element.addEventListener('click',function addToCart(e){
//       let currNameOfProduct=e.target.parentNode.parentNode.querySelector('.product-title').textContent;
//       let currPriceOfProduct=e.target.parentNode.parentNode.querySelector('.product-line-price').textContent;
//       outputElement.value+=`Added ${currNameOfProduct} for ${currPriceOfProduct} to the cart.\n`

//       if(!productsCart.includes(currNameOfProduct)){
//          productsCart.push(currNameOfProduct)
//       }
//       sum+=Number(currPriceOfProduct);
//       });
//    });

//    checkoutElement.addEventListener('click', checkout);

//    function checkout(){

//       outputElement.value+=`You bought ${productsCart.join(', ')} for ${sum.toFixed(2)}.`
//      Array.from(addButtonElements).forEach(element => {
//          element.disabled=true;
//       });
//       checkoutElement.disabled=true;
//    }  
// }

function solve() {
    document.querySelector('.shopping-cart').addEventListener('click', addToCart);

    let boughtProducts = [];
    let sum = 0;
    let outputEl = document.querySelector('textarea');
    function addToCart(e) {
        if ((e.target.className === 'add-product') && e.target.tagName === 'BUTTON') {
            let product = e.target.parentNode.parentNode;
            let name = product.querySelector('.product-title').textContent;
            let price = product.querySelector('.product-line-price').textContent;

            outputEl.value += `Added ${name} for ${Number(price).toFixed(2)} to the cart.\n`;

            if (!boughtProducts.includes(name)) {
                boughtProducts.push(name);
            }
            sum += Number(price);
        }

        if(e.target.className=== 'checkout'){
            outputEl.value += `You bought ${boughtProducts.join(', ')} for ${sum.toFixed(2)}.`;
            deactivate();
           }
    }

    function deactivate(){
        Array.from(document.getElementsByTagName('button')).forEach(element => {
     element.disabled=true;
       });
    }
}

