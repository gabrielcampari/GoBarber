import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity('appointments')
class Appointment { 
  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  provider: String;

  @Column('time with time zone')
  date: Date; 

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date; 

}

export default Appointment; 