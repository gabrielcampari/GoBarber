import { DataSource } from 'typeorm';
import Appointment from '../models/Appointment';


const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'gostack_gobarber',
  synchronize: false,
  logging: false,
  entities: ['src/models/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  cli: {migrationsDir: 'src/database/migrations',},
  } as any
);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((error) => {
    console.error('Error during Data Source initialization:', error);
  });

export default AppDataSource;
