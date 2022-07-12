import Car from '../Cars/Car.type';
import Office from "../Offices/Office.type";

type Booking = {
    id: number
    car?: Car
    office?: Office
    createdAt: string
}

export default Booking;