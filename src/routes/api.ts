import {Express, Request, Response} from 'express';
import { CreateUserHandler } from '../controller/user.controller';

const routes = (app: Express)=>{
  app.get('/healthcheck', (req:Request, res: Response)=>{
    res.json({
        status: true,
        message: "Wellcome to your project manager!!!"
    })
  })

  app.post("/api/users", CreateUserHandler)
}

export default routes;