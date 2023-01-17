import {Express, Request, Response} from 'express';
import { CreateUserHandler } from '../controller/user.controller';
import validate from '../middleware/validation';
import { createUserSchema } from '../schema/user.schema';

const routes = (app: Express)=>{
  app.get('/healthcheck', (req:Request, res: Response)=>{
    res.json({
        status: true,
        message: "Wellcome to your project manager!!!"
    })
  })

  app.post("/api/users",validate(createUserSchema), CreateUserHandler)
}

export default routes; 