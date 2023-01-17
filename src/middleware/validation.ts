import {Request, Response, NextFunction} from 'express';
import {AnyZodObject} from 'zod'

const validate = (schema: AnyZodObject) => (req:Request, res:Response , next:NextFunction )=>{
   try {
    schema.parse({
       body: req.body,
       query: req.query,
       params: req.params 
    });
    next();
   } catch (error) {
    return res.json({
        status: false,
        message: error
    })
   }
}

export default validate;