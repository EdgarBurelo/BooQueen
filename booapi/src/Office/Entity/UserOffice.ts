import {DataTypes, Model, NonAttribute, Optional} from 'sequelize';
import Office from './Office';
import sequelizeConnection from '../../Database/index';

export interface UserOfficeAttributes {
    id: number;
    OfficeId: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface UserOfficeInput extends Optional<UserOfficeAttributes, 'id'> {}
export interface UserOfficeOutput extends Required<UserOfficeAttributes> {
    Office?: NonAttribute<Office>
}

class UserOffice extends Model<UserOfficeAttributes, UserOfficeInput> implements UserOfficeAttributes {
    public id!: number;
    public OfficeId!: number;
    declare Office?: NonAttribute<Office>;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

UserOffice.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    OfficeId: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: Office,
            key: 'id',
        }
    },
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
});

Office.hasMany(UserOffice);
UserOffice.belongsTo(Office);

export default UserOffice;