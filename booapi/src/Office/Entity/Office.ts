import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../../Database/index';

export interface OfficeAttributes {
    id: number;
    name: string;
    location: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
export interface OfficeInput extends Optional<OfficeAttributes, 'id'> {}
export interface OfficeOutput extends Required<OfficeAttributes> {}

class Office extends Model<OfficeAttributes, OfficeInput> implements OfficeAttributes {
    public id!: number
    public name!: string
    public location!: string

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Office.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

export default Office;