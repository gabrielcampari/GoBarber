import express from 'express'; 
import routes from './routes'; 
import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("Server backend em execução na porta 3333🚀!"); 
})