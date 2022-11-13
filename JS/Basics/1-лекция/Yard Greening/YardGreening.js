    function YardGreening(imput){
        let finalprice=(imput[0]) * 7.61;
        let disc= finalprice * 0.18;
        let sum= finalprice - disc;
        console.log(`The final price is: ${sum} lv.`);
        console.log(`The discount is: ${disc} lv.`);
    }

YardGreening([550])