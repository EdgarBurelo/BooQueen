import React from 'react';
import {Page} from "../Components/Page/Page";
import {Header} from "../Components/Header/Header";
import {useGetCars} from "./Hooks/useGetCars";
import {RequestHandler} from "../Components/RequestHandler/RequestHandler";
import { bookCar } from './Hooks/BookCar'
import {useNavigate} from "react-router-dom";


const CarsPage: React.FC = () => {
    const navigate = useNavigate();
    const {cars, carsLoading, carsError} = useGetCars();

    return (
        <Page>
            <Header>Book a Car</Header>
            <RequestHandler loading={carsLoading} error={carsError} >
                {cars.map((car) => (
                    <div key={car.id}>
                        {car.name}
                        <button onClick={() => bookCar(car.id, navigate)}>Book</button>
                    </div>
                ))}
            </RequestHandler>
        </Page>
    )
}

export default CarsPage;