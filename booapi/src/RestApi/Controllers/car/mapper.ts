import {Car} from '../../Interfaces';
import {CarOutput} from "../../../Car/Entity/Car";

export const toCar = (car: CarOutput): Car => {
    return {
        id: car.id,
        name: car.name,
        createdAt: car.createdAt,
        updatedAt: car.updatedAt,
        deletedAt: car.deletedAt,
    }
}