import { Model, DataTypes, Optional, BelongsToGetAssociationMixin, HasManyGetAssociationsMixin, HasManyAddAssociationMixin } from 'sequelize';
import sequelize from "../config/database";
import User from './User';
import Note from './Note';

interface FolderAttributes {
  id: number;
  name: string;
  user_id: number;
  note_ids: number[];
}

interface FolderCreationAttributes extends Optional<FolderAttributes, "id"> {}

export class Folder extends Model<FolderAttributes, FolderCreationAttributes> implements FolderAttributes {
  public id!: number;
  public name!: string;
  public user_id!: number;
  public note_ids!: number[];

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
    note_ids: {
      type: DataTypes.ARRAY,
      allowNull: true,
      references: {
          model: 'notes',
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
