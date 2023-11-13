import { requestFactory } from './requester';

const url = `http://localhost:3030/data/fruits`;

export const fruitServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(url);
        const fruits = Object.values(result);
        return fruits;
    };
    
    const getOne = async (fruitId) => {
        const result = await request.get(`${url}/${fruitId}`);
    
        return result;
    };
    
    const create = async (fruitData) => {
        const result = await request.post(url, fruitData);
        
        return result;
    };
    
    const edit = (fruitId, data) => request.put(`${url}/${fruitId}`, data);

    const deleteFruit = (fruitId) => request.delete(`${url}/${fruitId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteFruit,
    };
}