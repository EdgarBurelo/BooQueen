import * as CarService from '../../../Car/Service/CarService';
import * as userCarService from '../../../Car/Service/UserCarService'
import {Booking, Car} from '../../Interfaces';
import {createUserCarDTO} from "../../dto/car.dto";
import * as carMapper from './mapper'
import * as bookingMapper from '../booking/mapper';

export const getAll = async(): Promise<Car[]> => {
    return (await CarService.getAll()).map(carMapper.toCar);
}

export const create = async (payload: createUserCarDTO): Promise<Booking> => {
    const userCar = await userCarService.create(payload);

    return bookingMapper.toBooking(userCar);
}