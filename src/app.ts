import express from 'express';
import  config  from 'config';
import connect from './utils/database';

const port = config.get<number>("port")

const app = express()

app.listen(port, async ()=>{
    console.log(`App is running on ${port}`);
    
    await connect()
})