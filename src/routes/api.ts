import {Express, Request, Response} from 'express';
import { createUserSessionHandler, getUserSessionHandler } from '../controller/session.controller';
import { CreateUserHandler } from '../controller/user.controller';
import validate from '../middleware/validation';
import { createSessionSchema } from '../schema/session.schema';
import { createUserSchema } from '../schema/user.schema';

const routes = (app: Express)=>{
  app.get('/healthcheck', (req:Request, res: Response)=>{
    res.json({
        status: true,
        message: "Wellcome to your project manager!!!"
    })
  })

  app.post("/api/users",validate(createUserSchema), CreateUserHandler);
  app.post("/api/sessions",validate(createSessionSchema), createUserSessionHandler);
  app.get("/api/sessions", getUserSessionHandler)
}

export default routes; 