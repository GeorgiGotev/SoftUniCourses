import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { fruitServiceFactory } from '../services/fruitService';

export const FruitContext = createContext();

export const FruitProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [fruits, setFruits] = useState([]);
    const fruitService = fruitServiceFactory();

    useEffect(() => {
        fruitService.getAll()
            .then(result => {
                setFruits(result)
            })
    }, []);

    const onCreateFruitSubmit = async (data) => {
        const newFruit = await fruitService.create(data);

        setFruits(state => [...state, newFruit]);

        navigate('/catalog');
    };

    const onFruitEditSubmit = async (values) => {
        const result = await fruitService.edit(values._id, values);

        setFruits(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`);
    };

    const deleteFruit = (fruitId) => {
        setFruits(state => state.filter(fruit => fruit._id !== fruitId));
    };

    const getFruit = (fruitId) => {
        return fruits.find(fruit => fruit._id === fruitId);
    };

    const contextValues = {
        fruits,
        onCreateFruitSubmit,
        onFruitEditSubmit,
        deleteFruit,
        getFruit,
    };

    return (
        <FruitContext.Provider value={contextValues}>
            {children}
        </FruitContext.Provider>
    );
};

export const useFruitContext = () => {
    const context = useContext(FruitContext);

    return context;
};
