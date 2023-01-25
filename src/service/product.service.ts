import { DocumentDefinition } from "mongoose";
import ProductModel, { ProductDocument } from "../models/product.model";

export const createProduct = async(input:DocumentDefinition<Omit<ProductDocument,"createdAT" | "updatedAT">>)=>{
 return ProductModel.create(input);
}