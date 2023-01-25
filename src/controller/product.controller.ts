import {Request, Response} from "express";
import { CreateProductInput } from "../schema/product.Schema";
import { createProduct } from "../service/product.service";

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