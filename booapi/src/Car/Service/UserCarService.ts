import * as UserCarRepository from "../Repository/UserCarRepository";
import { UserCarOutput } from "../Entity/UserCar";

export const getAll = (): Promise<UserCarOutput[]> => {
    return UserCarRepository.getAll();
}

export const getOne = (): Promise<UserCarOutput> => {
    return UserCarRepository.getOne();
}