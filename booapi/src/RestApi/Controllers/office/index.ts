import * as OfficeService from '../../../Office/Service/OfficeService';
import {Office} from '../../Interfaces';
import * as officeMapper from './mapper'

export const getAll = async(): Promise<Office[]> => {
    return (await OfficeService.getAll()).map(officeMapper.toOffice);
}
