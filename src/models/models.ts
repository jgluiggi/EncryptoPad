import sequelize from "../config/database";

import User from "./User";
import Organization from "./Organization";
import Folder from "./Folder";
import Note from "./Note";
import UserOrganization from "./UserOrganization";
import Role from "./Role";

const models = {
  User,
  Organization,
  Folder,
  Note,
  UserOrganization,
  Role,
};

Object.values(models).forEach((model: any) => {
  if (model.associate) {
    model.associate();
  }
});

export { sequelize };
export default models;
