import * as CarRepository from "../Repository/CarRepository";
import {CarOutput} from "../Entity/Car";

export const getAll = (): Promise<CarOutput[]> => {
    return CarRepository.getAll();
}