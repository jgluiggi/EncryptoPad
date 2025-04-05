import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

export class UserOrganization extends Model {
  public user_id!: number;
  public organization_id!: number;
}

UserOrganization.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    organization_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    sequelize,
    tableName: "user_organizations",
    timestamps: false,
  }
);

export default UserOrganization;
