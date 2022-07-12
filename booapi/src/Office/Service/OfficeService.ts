import * as OfficeRepository from "../Repository/OfficeRepository";
import {OfficeOutput} from "../Entity/Office";

export const getAll = (): Promise<OfficeOutput[]> => {
    return OfficeRepository.getAll();
}