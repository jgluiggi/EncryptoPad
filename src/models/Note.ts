import { DataTypes, Model, BelongsToGetAssociationMixin, Optional } from "sequelize";
import sequelize from "../config/database";
import Folder from './Folder';

interface NoteAttributes {
    id: number;
    title: string;
    content: string;
    folder_id: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface NoteCreationAttributes extends Optional<NoteAttributes, "id" | "createdAt" | "updatedAt"> {}

class Note extends Model<NoteAttributes, NoteCreationAttributes> implements NoteAttributes {
    public id!: number;
    public title!: string;
    public content!: string;
    public folder_id!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public static associate() {
        Note.belongsTo(Folder, {
          foreignKey: 'folder_id',
          as: 'parent_folder',
        });
    }
}

Note.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        folder_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
            model: 'folders',
            key: 'id',
          },
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: "notes",
        timestamps: true, // enables createdAt & updatedAt auto-handling
    }
);

export default Note;
