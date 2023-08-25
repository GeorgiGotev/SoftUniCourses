const id = require('uniqid');
const Cube = require('../models/Cube');


exports.getAll = async (search, from, to) => {

    let result = await Cube.find().lean();


    //TODO: use mongoose filter;
    if (search) {
        result = result.filter((cube) =>
            cube.name.toLowerCase().includes(search.toLowerCase())
        );
    }
    if (from) {
        result = result.filter(
            (cube) => Number(cube.difficultyLevel) >= Number(from)
        );
    }
    if (to) {
        result = result.filter(
            (cube) => Number(cube.difficultyLevel) <= Number(to)
        );
    }

    return result;
};

exports.getById = (id) =>  Cube.findById(id).populate('accessories');

exports.create =  (cubeData) => {
    const cube = new Cube(cubeData);

    return cube.save();

};

exports.attachAccessory=async(cubeId,accessoryId)=>{
    const cube=await Cube.findById(cubeId);
    cube.accessories.push(accessoryId);

    return cube.save();

    // return Cube.findByIdAndUpdate(cubeId,{$push:{accessoryId}})
}
