const { v4: uuidv4, validate: isUuid } = require('uuid');

class Appointment { 
  id: String;

  provider: String;

  date: Date; 

  constructor({provider, date}: Omit<Appointment, 'id'>){
    this.id = uuidv4();
    this.provider = provider; 
    this.date = date; 
  }
}

export default Appointment; 