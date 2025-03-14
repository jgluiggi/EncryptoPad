import { Model, DataTypes, Optional, HasManyGetAssociationsMixin, HasManyAddAssociationMixin } from "sequelize";
import sequelize from "../config/database";
import Folder from "./Folder";

interface UserAttributes {
  id: number;
  email: string;
  username: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public email!: string;
  public username!: string;
  public password!: string;

  public getFolders!: HasManyGetAssociationsMixin<Folder>;
  public addFolder!: HasManyAddAssociationMixin<Folder, number>;

  public static associate() {
        User.hasMany(Folder, {
            foreignKey: 'user_id',
            as: 'folders',
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
  },
  {
    sequelize,
    tableName: "users",
    timestamps: false,
  }
);

export default User;
