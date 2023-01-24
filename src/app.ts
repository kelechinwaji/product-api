import express from 'express';
import  config  from 'config';
import connect from './utils/database';
import log from "./utils/logger";
import routes from './routes/api';
import deserializeUser from './middleware/deserializeUser';



const port = config.get<number>("port");

const app = express();

app.use(express.json());
app.use(deserializeUser);

app.listen(port, async ()=>{
    log.info(`App is running on http://localhost:${port}`);
    
    await connect()

    routes(app)
})