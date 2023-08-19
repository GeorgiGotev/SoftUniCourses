const db=require('../db.json');
const id=require('uniqid');

exports.getAll=(search, from, to)=>{
    let result=db.cubes.slice();

    if(search){
        result=result.filter(cube=>cube.name.toLowerCase().includes(search.toLowerCase()));
    }
    if(from){
        result=result.filter(cube=>Number(cube.difficultyLevel)>=Number(from))
    }
    if(to){
        result=result.filter(cube=>Number(cube.difficultyLevel)<=Number(to))
    }

    return result;
}

exports.getById=(id)=>db.cubes.find(x=>x.id===id)

exports.create = (cubeData) => {
    const newCube=({
        id: id(),
        ...cubeData,
    });

    db.cubes.push(newCube);

    return newCube;

};
