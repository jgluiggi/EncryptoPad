import { Model, DataTypes, Optional, HasManyGetAssociationsMixin, HasManyAddAssociationMixin } from "sequelize";
import sequelize from "../config/database";
import Folder from "./Folder";
import Organization from "./Organization";
import UserOrganization from "./UserOrganization";
import Role from "./Role";

interface UserAttributes {
  id?: number;
  email: string;
  username: string;
  password: string;
  role_id?: number;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id?: number;
  public email!: string;
  public username!: string;
  public password!: string;
  public role_id?: number;

  public getFolders!: HasManyGetAssociationsMixin<Folder>;
  public addFolder!: HasManyAddAssociationMixin<Folder, number>;

  public static associate() {
        User.hasMany(Folder, {
            foreignKey: 'user_id',
            as: 'folders',
            });
        
        User.belongsToMany(Organization, {
            through: UserOrganization,
            foreignKey: 'user_id',
            otherKey: 'organization_id',
            as: 'organizations',
        });

        User.belongsTo(Role, {
            foreignKey: 'role_id',
            as: 'role',
        });
    }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: false,
  }
);

export default User;
