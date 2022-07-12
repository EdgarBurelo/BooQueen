import React from 'react';
import {Page} from "../Components/Page/Page";
import {Header} from "../Components/Header/Header";
import {useGetOffices} from "./Hooks/useGetOffices";
import {RequestHandler} from "../Components/RequestHandler/RequestHandler";
import { bookOffice } from './Hooks/BookOffice'
import {useNavigate} from "react-router-dom";


const OfficePage: React.FC = () => {
    const navigate = useNavigate();
    const {offices, officesLoading, officesError} = useGetOffices();

    return (
        <Page>
            <Header>Book an Office</Header>
            <RequestHandler loading={officesLoading} error={officesError} >
                {offices.map((office) => (
                    <div key={office.id}>
                        {office.name}&nbsp;-&nbsp;
                        {office.location}
                        <button onClick={() => bookOffice(office.id, navigate)}>Book</button>
                    </div>
                ))}
            </RequestHandler>
        </Page>
    )
}

export default OfficePage;
