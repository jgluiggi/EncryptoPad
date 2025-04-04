import { Model, DataTypes, Optional, BelongsToManyGetAssociationsMixin, BelongsToManyAddAssociationMixin, HasManyGetAssociationsMixin, HasManyAddAssociationMixin } from "sequelize";
import sequelize from "../config/database";
import User from "./User";
import Folder from "./Folder";
import Note from "./Note";

interface OrganizationAttributes {
  id?: number;
  name: string;
}

interface OrganizationCreationAttributes extends Optional<OrganizationAttributes, "id"> {}

export class Organization extends Model<OrganizationAttributes, OrganizationCreationAttributes> implements OrganizationAttributes {
  public id?: number;
  public name!: string;

  public getUsers!: BelongsToManyGetAssociationsMixin<User>;
  public addUser!: BelongsToManyAddAssociationMixin<User, number>;
  public removeUser!: BelongsToManyAddAssociationMixin<User, number>;
  
  public getFolders!: HasManyGetAssociationsMixin<Folder>;
  public addFolder!: HasManyAddAssociationMixin<Folder, number>;
  public removeFolder!: HasManyAddAssociationMixin<Folder, number>;
  
  public getNotes!: HasManyGetAssociationsMixin<Note>;
  public addNote!: HasManyAddAssociationMixin<Note, number>;
  public removeNote!: HasManyAddAssociationMixin<Note, number>;

  public static associate() {
    Organization.belongsToMany(User, {
      through: "UserOrganizations",
      foreignKey: "organization_id",
      otherKey: "user_id",
      as: "users",
    });

    Organization.hasMany(Folder, {
      foreignKey: "organization_id",
      as: "folders",
    });

    Organization.hasMany(Note, {
      foreignKey: "organization_id",
      as: "notes",
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
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "organizations",
    timestamps: false,
  }
);

export default Organization;
