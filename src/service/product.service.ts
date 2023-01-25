import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import ProductModel, { ProductDocument } from "../models/product.model";

export const createProduct = async(input:DocumentDefinition<Omit<ProductDocument,"createdAT" | "updatedAT">>)=>{
 return ProductModel.create(input);
}

export const findProduct = (query: FilterQuery<ProductDocument>, options: QueryOptions = {lean: true})=>{
 return ProductModel.findOne(query, {}, options);
}

export const findAndUpdateProduct = (query:FilterQuery<ProductDocument>, update: UpdateQuery<ProductDocument>, options: QueryOptions )=>{
 return ProductModel.findOneAndUpdate(query, update, options);
}