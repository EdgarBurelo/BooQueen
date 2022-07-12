import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../../Database/index';

export interface CarAttributes {
    id: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
export interface CarInput extends Optional<CarAttributes, 'id'> {}
export interface CarOutput extends Required<CarAttributes> {}

class Car extends Model<CarAttributes, CarInput> implements CarAttributes {
    public id!: number
    public name!: string
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Car.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

export default Car