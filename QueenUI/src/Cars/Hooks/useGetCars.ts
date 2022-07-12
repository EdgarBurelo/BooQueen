import {useState, useEffect} from "react";
import Car from '../Car.type';

type CarsData = {
    carsError: boolean
    carsLoading: boolean
    cars: Car[]
}

export const useGetCars = (): CarsData => {
    const [cars, setCars] = useState([]);
    const [carsLoading, setCarsLoading] = useState(false);
    const [carsError, setCarsError] = useState(false);


    const apiHost = 'http://localhost:8000/api/car/';

    useEffect(() => {
        setCarsLoading(true);
        fetch(apiHost, {
            method: 'GET',
            headers: {'Content-Type':'application/json'},
        })
            .then((res) => {
                if ((res && res.status === 404) || res.status === 403) return;

                return res.json();
            })
            .then((data) => {
                setCars(data);
            })
            .catch((err) => {
                setCarsError(true);
                console.error(err);
            })
            .finally(() => {
                setCarsLoading(false);
            });
    }, [apiHost]);

    return { carsLoading, carsError, cars };
};
