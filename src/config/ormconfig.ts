import { DataSourceOptions } from 'typeorm';
import * as path from 'path';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'gostack_gobarber',
  synchronize: false,
  logging: false,
  entities: [path.join(__dirname, 'src/models/*.ts')],
  migrations: [path.join(__dirname, 'src/database/migrations/*.ts')],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
} as any;

export default config;
