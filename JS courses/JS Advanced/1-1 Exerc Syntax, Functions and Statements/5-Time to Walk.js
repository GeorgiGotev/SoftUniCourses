function solve(steps, metersOfStep, speed) {
    let mToUni=steps*metersOfStep;
    let timeToUniInSec=(mToUni/1000/speed)*3600;
    let additionalSec=Math.floor(mToUni/500)*60;
    let fullTimeInSec=timeToUniInSec+additionalSec;
    
    let hr=Math.floor(fullTimeInSec/3600);
    fullTimeInSec-=hr*3600;

    let min=Math.floor(fullTimeInSec/60);
    fullTimeInSec-=min*60;

    if(hr<10){
        hr=`0${hr}`
    }
    if(min<10){
        min=`0${min}`
    }
    if(fullTimeInSec<10){
        fullTimeInSec=`0${Math.round(fullTimeInSec)}`
    }

    console.log(`${hr}:${min}:${Math.round(fullTimeInSec)}`);
}
solve(4000, 0.60, 5);