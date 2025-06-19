import { getDatabaseConfig } from '../../config/database.config';
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  ...getDatabaseConfig(),
  dialect: 'postgres',
  models: [__dirname + "/models"]
});
export default sequelize;
