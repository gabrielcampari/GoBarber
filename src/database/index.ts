import { DataSource } from 'typeorm';
import config from '../config/ormconfig';  // ajuste o caminho conforme necessário

const AppDataSource = new DataSource(config);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((error) => {
    console.error('Error during Data Source initialization:', error);
  });

export default AppDataSource;
