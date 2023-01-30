import {Express, Request, Response} from 'express';
import { createProductHandler, getProductHandler, updateProductHandler } from '../controller/product.controller';
import { createUserSessionHandler, deleteUserSessionsHandler, getUserSessionsHandler } from '../controller/session.controller';
import { CreateUserHandler } from '../controller/user.controller';
import requireUser from '../middleware/requireUser';
import validate from '../middleware/validation';
import { createProductSchema, getProductSchema, updateProductSchema } from '../schema/product.Schema';
import { createSessionSchema } from '../schema/session.schema';
import { createUserSchema } from '../schema/user.schema';

const routes = (app: Express)=>{
  //Homepage
  app.get('/healthcheck', (req:Request, res: Response)=>{
    res.json({
        status: true,
        message: "Wellcome to your project manager!!!"
    })
  })

  //User routes
  app.post("/api/users",validate(createUserSchema), CreateUserHandler);
  app.post("/api/sessions",validate(createSessionSchema), createUserSessionHandler);
  app.get("/api/sessions", requireUser, getUserSessionsHandler)
  app.delete("/api/sessions", requireUser, deleteUserSessionsHandler)

  //Product routes
   app.post("/api/products", [requireUser, validate(createProductSchema)], createProductHandler);
   app.put("/api/products", [requireUser, validate(updateProductSchema)], updateProductHandler)
   app.get("/api/products",  validate(getProductSchema), getProductHandler)
}

export default routes; 