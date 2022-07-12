import {useState, useEffect} from "react";
import Office from '../Office.type';

type OfficeData = {
    officesError: boolean
    officesLoading: boolean
    offices: Office[]
}

export const useGetOffices = (): OfficeData => {
    const [offices, setOffices] = useState([]);
    const [officesLoading, setOfficesLoading] = useState(false);
    const [officesError, setOfficesError] = useState(false);


    const apiHost = 'http://localhost:8000/api/office/';

    useEffect(() => {
        setOfficesLoading(true);
        fetch(apiHost, {
            method: 'GET',
            headers: {'Content-Type':'application/json'},
        })
            .then((res) => {
                if ((res && res.status === 404) || res.status === 403) return;

                return res.json();
            })
            .then((data) => {
                setOffices(data);
            })
            .catch((err) => {
                setOfficesError(true);
                console.error(err);
            })
            .finally(() => {
                setOfficesLoading(false);
            });
    }, [apiHost]);

    return { officesLoading, officesError, offices };
};
