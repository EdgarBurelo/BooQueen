import * as UserCarService from '../../../Car/Service/UserCarService';
import * as UserOfficeService from '../../../Office/Service/UserOfficeService';
import { Booking } from '../../Interfaces'
import * as bookingMapper from './mapper';

export const getAll = async(): Promise<Booking[]> => {
    const UserCars = (await UserCarService.getAll()).map(bookingMapper.toBooking);
    const UserOffices = (await UserOfficeService.getAll()).map(bookingMapper.toBooking);
    return [...UserCars, ...UserOffices];
}