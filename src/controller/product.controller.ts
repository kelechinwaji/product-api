import {Request, Response} from "express";
import { CreateProductInput, UpdateProductInput } from "../schema/product.Schema";
import { createProduct, deleteProduct, findAndUpdateProduct, findProduct } from "../service/product.service";

export const createProductHandler =async (req:Request<{}, {}, CreateProductInput["body"]>, res:Response)=>{
 try {
    const userId = res.locals.user._id;
    const body = req.body;
    const product = await createProduct({...body, user: userId});
    return res.json({
        status: true,
        message: "Product created successfully",
        data: product
    })
 } catch (error) {
    res.json({
        status: false,
        message: error
    })
 }
}

export const getProductHandler =async (req:Request<UpdateProductInput["params"]>, res:Response)=>{
   
  
}

export const deleteProductHandler = async (req:Request<UpdateProductInput["params"]>, res:Response)=>{
    try {
        const userId = res.locals.user._id;
        const productId = req.params.productId;
        
        const product = await findProduct({productId});
     
        if(!product){
         return res.sendStatus(404)
        }
     
        if(product.user != userId){
          return res.sendStatus(403)
        }

        const result = await deleteProduct({productId})
         return res.json({
            status: true,
            message: "Delete Product successfull",
           
         })
    } catch (error) {
        return res.json({
            status: false,
            message: error
        })
    } 
}

export const updateProductHandler =  async (req:Request<UpdateProductInput["params"]>, res:Response)=>{

    try {
        const userId = res.locals.user._id;
        const productId = req.params.productId;
        const update = req.body;
        
        const product = await findProduct({productId});
     
        if(!product){
         return res.sendStatus(404)
        }
     
        if(product.user != userId){
          return res.sendStatus(403)
        }

        const result = await findAndUpdateProduct({productId}, update, {new: true})
         return res.json({
            status: true,
            message: "Updated successfull",
            data: result
         })
    } catch (error) {
        return res.json({
            status: false,
            message: error
        })
    }
}