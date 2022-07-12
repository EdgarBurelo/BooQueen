import * as UserOfficeRepository from "../Repository/UserOfficeRepository";
import { UserOfficeOutput } from "../Entity/UserOffice";

export const getAll = (): Promise<UserOfficeOutput[]> => {
    return UserOfficeRepository.getAll();
}

export const getOne = (): Promise<UserOfficeOutput> => {
    return UserOfficeRepository.getOne();
}