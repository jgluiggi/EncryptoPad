import {
  Model,
  DataTypes,
  Optional,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  BelongsToManyGetAssociationsMixin,
} from "sequelize";
import sequelize from "../config/database";
import User from "./User";
import UserOrganization from "./UserOrganization";
import Note from "./Note";
import Folder from "./Folder";

interface OrganizationAttributes {
  id?: number;
  name: string;
}

interface OrganizationCreationAttributes extends Optional<OrganizationAttributes, "id"> {}

export class Organization
  extends Model<OrganizationAttributes, OrganizationCreationAttributes>
  implements OrganizationAttributes
{
  public id?: number;
  public name!: string;

  public getUsers!: BelongsToManyGetAssociationsMixin<User>;
  public addUser!: HasManyAddAssociationMixin<User, number>;
  public removeUser!: HasManyAddAssociationMixin<User, number>;

  public getNotes!: HasManyGetAssociationsMixin<Note>;
  public addNote!: HasManyAddAssociationMixin<Note, number>;
  public removeNote!: HasManyAddAssociationMixin<Note, number>;

  public getFolders!: HasManyGetAssociationsMixin<Folder>;
  public addFolder!: HasManyAddAssociationMixin<Folder, number>;
  public removeFolder!: HasManyAddAssociationMixin<Folder, number>;

  public static associate() {
    Organization.belongsToMany(User, {
      through: UserOrganization,
      foreignKey: "organization_id",
      otherKey: "user_id",
      as: "users",
    });

    Organization.hasMany(Note, {
      foreignKey: "organization_id",
      as: "notes",
    });

    Organization.hasMany(Folder, {
      foreignKey: "organization_id",
      as: "folders",
    });
  }
}

Organization.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "organizations",
    timestamps: false,
  }
);

export default Organization;
