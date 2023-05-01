function attachGradientEvents() {

    let resultElement = document.getElementById('result');
    let boxElement = document.getElementById('gradient');

    boxElement.addEventListener('mouseout', out)
    boxElement.addEventListener('mousemove', move);

    
    function move(e) {
        resultElement.textContent = `${Math.floor(e.offsetX / (e.target.clientWidth - 1) * 100)}%`;
    }
    function out(){
        resultElement.textContent='';
    }
}

   