import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1722273008896 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { //Aqui serão inseridos valores para alterações e modificações do código.  
      await queryRunner.createTable(
        new Table({
          name:'appointments',
          columns: [
            {
              name: 'id',
              type: 'varchar',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'provider',
              type: 'varchar',
            },
            {
              name: 'date',
              type: 'timestamp with time zone',
            },
            {
              name: 'created_at',
              type: 'timestamp', 
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ]
        })
      ); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> { //Semelhante a um callback, métodos de desfazer o que foi feito em up 
      await queryRunner.dropTable('appointments');
    }

}
