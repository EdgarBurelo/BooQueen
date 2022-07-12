import {Office} from '../../Interfaces';
import {OfficeOutput} from "../../../Office/Entity/Office";

export const toOffice = (office: OfficeOutput): Office => {
    return {
        id: office.id,
        name: office.name,
        location: office.location,
        createdAt: office.createdAt,
        updatedAt: office.updatedAt,
        deletedAt: office.deletedAt,
    }
}