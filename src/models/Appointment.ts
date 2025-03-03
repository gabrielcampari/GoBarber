import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from './User';
@Entity('appointments')
class Appointment { 
  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  provider_id: String;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'provider_id'})
  provider: User;

  @Column('time with time zone')
  date: Date; 

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date; 
}

export default Appointment; 
