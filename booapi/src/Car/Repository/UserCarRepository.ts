import UserCar, {UserCarInput, UserCarOutput} from '../Entity/UserCar';
import Car from "../Entity/Car";


export const getAll = async (): Promise<UserCarOutput[]> => {
    return await UserCar.findAll({
        include: Car,
    });
}

export const getOne = async (payload: UserCarInput): Promise<UserCarOutput> => {
    return await UserCar.findOne({
        where: {
            id: payload.id,
        },
        include: Car,
    });
}

export const create = async (payload: UserCarInput): Promise<UserCarOutput> => {
    const newUserCar = await UserCar.create(payload, { include: Car });
    const userCar = await getOne(newUserCar);
    console.log(userCar)
    return userCar;
}
