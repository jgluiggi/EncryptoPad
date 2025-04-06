import { Model, DataTypes, Optional, HasManyGetAssociationsMixin, HasManyAddAssociationMixin } from "sequelize";
import sequelize from "../config/database";
import User from "./User";

interface RoleAttributes {
    id?: number;
    name: string;
}

interface RoleCreationAttributes extends Optional<RoleAttributes, "id"> {}

export class Role extends Model<RoleAttributes, RoleCreationAttributes> implements RoleAttributes {
    public id?: number;
    public name!: string;

    public static associate() {
        Role.hasMany(User, {
            foreignKey: "role_id",
            as: "users",
        });
    }
}

Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize,
        tableName: "roles",
        timestamps: false,
    }
);

export default Role;