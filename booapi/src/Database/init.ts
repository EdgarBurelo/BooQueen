import Car from '../Car/Entity/Car'
import Office from '../Office/Entity/Office'
import UserCar from "../Car/Entity/UserCar";
import dotenv from "dotenv";

dotenv.config();

const isDev = process.env.MODE as string === 'development'

const dbInit = () => Promise.all([
    Car.sync({ alter: isDev }),
    UserCar.sync({ alter: isDev }),
    Office.sync({ alter: isDev }),
])

export default dbInit;