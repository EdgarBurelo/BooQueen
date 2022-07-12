import {Booking} from '../../Interfaces';
import {UserCarOutput} from "../../../Car/Entity/UserCar";
import {UserOfficeOutput} from "../../../Office/Entity/UserOffice";

export const toBooking = (booking: UserCarOutput | UserOfficeOutput ): Booking => {
    return {
        id: booking.id,
        car: "Car" in booking ? booking.Car : null,
        office: "Office" in booking ? booking.Office : null,
        createdAt: booking.createdAt,
    }
}