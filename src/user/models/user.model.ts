import { DataTypes, Model } from 'sequelize';
import { sequelize } from 'src/main';

export class User extends Model {}

export function initUserModel() {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      phoneNumber: {
        type: DataTypes.STRING,
      },
      accountId: {
        type: DataTypes.UUID,
      },
      country: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
}
