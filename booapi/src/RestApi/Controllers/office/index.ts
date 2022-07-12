import * as OfficeService from '../../../Office/Service/OfficeService';
import * as userOfficeService from '../../../Office/Service/UserOfficeService';
import {Booking, Office} from '../../Interfaces';
import * as officeMapper from './mapper'
import {createUserOfficeDTO} from "../../dto/office.dto";
import * as bookingMapper from '../booking/mapper'


export const getAll = async(): Promise<Office[]> => {
    return (await OfficeService.getAll()).map(officeMapper.toOffice);
}

export const create = async (payload: createUserOfficeDTO): Promise<Booking> => {
    const userOffice = await userOfficeService.create(payload);

    return bookingMapper.toBooking(userOffice);
}