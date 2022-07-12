import {NavigateFunction} from "react-router-dom";

export const bookCar = async (carId: number, navigate: NavigateFunction): Promise<any> => {
    const apiHost = 'http://localhost:8000/api/car/book';
    const body = {
        CarId: carId,
    }

    await fetch(apiHost, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        mode: "cors",
        body: JSON.stringify(body)
    })
        .then((res) => {
            if ((res && res.status === 404) || res.status === 403) return;

            return res.json();
        })
        .then(() => {
            navigate('/bookings', {replace: true})
        })
        .catch((err) => {
            console.error(err);
        })
};
