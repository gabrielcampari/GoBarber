import { DataSource, Repository } from 'typeorm';
import Appointment from '../models/Appointment';

class AppointmentsRepository {
  private ormRepository: Repository<Appointment>;

  constructor(dataSource: DataSource) {
    this.ormRepository = dataSource.getRepository(Appointment);
  }

  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    });

    return findAppointment || null;
  }

  public create(appointmentData: Partial<Appointment>): Appointment {
    return this.ormRepository.create(appointmentData);
  }

  public async save(appointment: Appointment): Promise<Appointment> {
    return this.ormRepository.save(appointment);
  }

  public async find(): Promise<Appointment[]> {
    return this.ormRepository.find();
  }
}

export default AppointmentsRepository;
