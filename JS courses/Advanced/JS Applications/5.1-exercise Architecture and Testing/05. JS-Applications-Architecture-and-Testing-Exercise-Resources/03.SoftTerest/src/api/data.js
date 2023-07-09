import * as api from './api.js';

const endPoints={
    'ideas': `/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc`,
    'ideaById': `/data/ideas/`,
    'create': `/data/ideas`,
} 

export async function getAllIdeas(){
    return api.get(endPoints.ideas);
}

export async function getById(id){
    return api.get(endPoints.ideaById+id)
}

export async function createIdea(ideaData){
    return api.post(endPoints.create, ideaData)
}

export async function deleteById(id){
    return api.delete(endPoints.ideaById + id);
}