import { Model, DataTypes, BelongsToGetAssociationMixin, HasManyGetAssociationsMixin, HasManyAddAssociationMixin } from 'sequelize';
import sequelize from "../config/database";
import User from './User';
import Note from './Note';

class Folder extends Model {
  public id!: number;
  public name!: string;
  public user_id!: number;

  public getParentUser!: BelongsToGetAssociationMixin<User>;
  public getNotes!: HasManyGetAssociationsMixin<Note>;
  public addNote!: HasManyAddAssociationMixin<Note, number>;

  public static associate() {
    Folder.belongsTo(User, {
      foreignKey: 'user_id',
      as: 'parent_user',
    });
    Folder.hasMany(Note, {
      foreignKey: 'folder_id',
      as: 'notes',
    });
  }
}

Folder.init(
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Folder',
    tableName: 'folders',
    timestamps: false,
  }
);

export default Folder;
