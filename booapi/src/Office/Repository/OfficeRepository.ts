import Office, {OfficeOutput} from '../Entity/Office';

export const getAll = async (): Promise<OfficeOutput[]> => {
    return Office.findAll();
}