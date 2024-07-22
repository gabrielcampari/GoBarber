import { Router } from 'express';
import { parseISO } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository

//Rotas HTTP:

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();//appointmentsRepository.all() responsável por captar todos os appointments e enviar para o método get
  return response.json(appointments)
});

appointmentsRouter.post('/', (request, response) => {
  try{
    const { provider, date } = request.body; 
    const parsedDate = parseISO(date); 
    const CreateAppointment = new CreateAppointmentService(appointmentsRepository);
    const appointment = CreateAppointment.execute({ date: parsedDate, provider}); 
  
    return response.json(appointment);
  } catch (err) {
    if (err instanceof Error) {
      return response.status(400).json({ error: err.message });
    } else {
      return response.status(400).json({ error: 'An unknown error occurred' });
    }
  }
});

export default appointmentsRouter; 