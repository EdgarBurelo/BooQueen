import {DataTypes, Model, NonAttribute, Optional} from 'sequelize';
import Car from './Car';
import sequelizeConnection from '../../Database/index';

export interface UserCarAttributes {
    id: number;
    CarId: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}



export interface UserCarInput extends Optional<UserCarAttributes, 'id'> {}
export interface UserCarOutput extends Required<UserCarAttributes> {
    Car?: NonAttribute<Car>
}

class UserCar extends Model<UserCarAttributes, UserCarInput> implements UserCarAttributes {
    public id!: number;
    public CarId!: number;
    declare Car?: NonAttribute<Car>;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

UserCar.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    CarId: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: Car,
            key: 'id',
        }
    },
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
});

Car.hasMany(UserCar);
UserCar.belongsTo(Car);

export default UserCar