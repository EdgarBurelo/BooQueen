import Car, {CarOutput} from '../Entity/Car';


export const getAll = async (): Promise<CarOutput[]> => {
        return Car.findAll();
}