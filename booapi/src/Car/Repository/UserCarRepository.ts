import UserCar , {UserCarOutput} from '../Entity/UserCar';
import Car from "../Entity/Car";


export const getAll = async (): Promise<UserCarOutput[]> => {
    return UserCar.findAll({
        include: Car,
    });
}

export const getOne = async (): Promise<UserCarOutput> => {
    return  UserCar.findOne({
        where: {
            id: 1,
        },
        include: Car,
    });
}
