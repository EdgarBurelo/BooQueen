import UserOffice, {UserOfficeInput, UserOfficeOutput} from '../Entity/UserOffice';
import Office from "../Entity/Office";


export const getAll = async (): Promise<UserOfficeOutput[]> => {
    return UserOffice.findAll({
        include: Office,
    });
}

export const getOne = async (payload: UserOfficeInput): Promise<UserOfficeOutput> => {
    return  UserOffice.findOne({
        where: {
            id: payload.id,
        },
        include: Office,
    });
}

export const create = async (payload: UserOfficeInput): Promise<UserOfficeOutput> => {
    const newUserOffice = await UserOffice.create(payload, { include: Office });

    return await getOne(newUserOffice);
}