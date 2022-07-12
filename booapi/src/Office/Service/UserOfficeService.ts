import * as UserOfficeRepository from "../Repository/UserOfficeRepository";
import {UserOfficeInput, UserOfficeOutput} from "../Entity/UserOffice";

export const getAll = (): Promise<UserOfficeOutput[]> => {
    return UserOfficeRepository.getAll();
}

export const getOne = (payload: UserOfficeInput): Promise<UserOfficeOutput> => {
    return UserOfficeRepository.getOne(payload);
}

export const create = (payload: UserOfficeInput): Promise<UserOfficeOutput> => {
    return UserOfficeRepository.create(payload);
}
