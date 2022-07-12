import React from 'react';
import {Page} from "../Components/Page/Page";
import {Header} from "../Components/Header/Header";
import {useGetBookings} from "./Hooks/useGetBookings";
import {RequestHandler} from "../Components/RequestHandler/RequestHandler";
import Booking from "./Booking.type";


const BookingPage: React.FC = () => {
    const {bookings , bookingsLoading, bookingsError} = useGetBookings();
    debugger;
    return (
        <Page>
            <Header>Book an Office</Header>
            <RequestHandler loading={bookingsLoading} error={bookingsError} >
                {bookings.map((booking: Booking) => (
                    <div key={booking.id}>
                        {booking.car && booking.car.name}
                        {booking.office && booking.office.name}
                    </div>
                ))}
            </RequestHandler>
        </Page>
    )
}

export default BookingPage;
