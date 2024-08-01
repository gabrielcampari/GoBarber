import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppDataSource from '../database/index';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();

// Rotas HTTP:
appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = new AppointmentsRepository(AppDataSource);
  const appointments = await appointmentsRepository.find(); // Garantir que seja uma chamada assíncrona
  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  try {
    const { provider_id, date } = request.body;
    const parsedDate = parseISO(date);
    const createAppointment = new CreateAppointmentService();
    const appointment = await createAppointment.execute({ date: parsedDate, provider_id });

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
