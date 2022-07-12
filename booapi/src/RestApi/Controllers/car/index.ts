import * as CarService from '../../../Car/Service/CarService';
import {Car} from '../../Interfaces';
import * as carMapper from './mapper'

export const getAll = async(): Promise<Car[]> => {
    return (await CarService.getAll()).map(carMapper.toCar);
}