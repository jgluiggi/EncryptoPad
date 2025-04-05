import sequelize from "../config/database";

import User from "./User";
import Organization from "./Organization";
import Folder from "./Folder";
import Note from "./Note";
import UserOrganization from "./UserOrganization";

const models = {
  User,
  Organization,
  Folder,
  Note,
  UserOrganization,
};

Object.values(models).forEach((model: any) => {
  if (model.associate) {
    model.associate();
  }
});

export { sequelize };
export default models;
