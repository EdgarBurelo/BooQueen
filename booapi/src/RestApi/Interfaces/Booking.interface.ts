import {Car, Office} from './index'

export interface Booking {
    id: number
    office?: Office
    car?: Car
    createdAt: Date
}