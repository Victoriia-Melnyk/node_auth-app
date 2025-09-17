import { DataTypes } from 'sequelize';
import { client } from '../utils/db';
import { User } from '../models/User';

export const Token = client.define('token', {
  refreshToken: { type: DataTypes.STRING, allowNull: false },
});

Token.belongsTo(User);
User.hasOne(Token);
