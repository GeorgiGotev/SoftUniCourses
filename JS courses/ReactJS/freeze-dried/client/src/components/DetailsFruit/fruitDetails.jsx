import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useService } from '../../hooks/useService';
import { fruitServiceFactory } from '../../services/fruitService';

export default function FruitDetails() {
    const { fruitId } = useParams();
    const [fruit, setFruit] = useState({});
    // const fruitService = useService(fruitServiceFactory);
    const fruitService=fruitServiceFactory();

    useEffect(() => {
        fruitService.getOne(fruitId).then((result) => {
            setFruit(result);
            // console.log(result._id);
        });
    }, [fruitId]);
}
