import {useState, useEffect} from "react";
import Booking from '../Booking.type';

type BookingData = {
    bookingsError: boolean
    bookingsLoading: boolean
    bookings: Booking[]
}

export const useGetBookings = (): BookingData => {
    const [bookings, setBookings] = useState([]);
    const [bookingsLoading, setBookingsLoading] = useState(false);
    const [bookingsError, setBookingsError] = useState(false);


    const apiHost = 'http://localhost:8000/api/booking/';

    useEffect(() => {
        setBookingsLoading(true);
        fetch(apiHost, {
            method: 'GET',
            headers: {'Content-Type':'application/json'},
        })
            .then((res) => {
                if ((res && res.status === 404) || res.status === 403) return;

                return res.json();
            })
            .then((data) => {
                setBookings(data);
            })
            .catch((err) => {
                setBookingsError(true);
                console.error(err);
            })
            .finally(() => {
                setBookingsLoading(false);
            });
    }, [apiHost]);

    return { bookings, bookingsLoading, bookingsError };
};
