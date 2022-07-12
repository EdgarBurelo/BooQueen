import UserOffice , {UserOfficeOutput} from '../Entity/UserOffice';
import Office from "../Entity/Office";


export const getAll = async (): Promise<UserOfficeOutput[]> => {
    return UserOffice.findAll({
        include: Office,
    });
}

export const getOne = async (): Promise<UserOfficeOutput> => {
    return  UserOffice.findOne({
        where: {
            id: 1,
        },
        include: Office,
    });
}
