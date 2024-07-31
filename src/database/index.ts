import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'gostack_gobarber',
  synchronize: false,
  logging: false,
  entities: ['src/models/*.ts'], // Ajuste o caminho para apontar corretamente para o diretório das entidades
  migrations: ['src/database/migrations/*.ts'], // Ajuste o caminho para apontar corretamente para o diretório das migrações
  cli: {
    migrationsDir: 'src/database/migrations', // Ajuste o caminho para apontar corretamente para o diretório das migrações
  }} as any, 
);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((error) => {
    console.error('Error during Data Source initialization:', error);
  });

export default AppDataSource;
