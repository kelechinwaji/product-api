import {Express, Request, Response} from 'express';

const routes = (app: Express)=>{
  app.get('/healthcheck', (req:Request, res: Response)=>{
    res.json({
        status: true,
        message: "Wellcome to your project manager!!!"
    })
  })
}

export default routes;