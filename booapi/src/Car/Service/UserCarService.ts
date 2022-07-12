import * as UserCarRepository from "../Repository/UserCarRepository";
import { UserCarOutput, UserCarInput } from "../Entity/UserCar";

export const getAll = (): Promise<UserCarOutput[]> => {
    return UserCarRepository.getAll();
}

export const getOne = (payload: UserCarInput): Promise<UserCarOutput> => {
    return UserCarRepository.getOne(payload)
}

export const create = (payload: UserCarInput): Promise<UserCarOutput> => {
    return UserCarRepository.create(payload);
}