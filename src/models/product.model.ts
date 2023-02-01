import mongoose from "mongoose";
// import {nanoid} from "nanoid";
import { v4 as uuidv4 } from 'uuid';
import { UserDocument } from "./user.model";

// const uId = nanoid("abcdefghijklmnopqrstuvwxyz0123456789", 9)

export interface ProductInput {
    user: UserDocument["_id"],
    title: string,
    description: string,
    price: string,
    image: string,
}

export interface ProductDocument extends ProductInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
  }

const productSchema  = new mongoose.Schema({
    productId:{
        type: String,
        required: true,
        unique: true,
        default: () => `product_${uuidv4()}`,
    },
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
    image: {type: String, required: true},
},
{
    timestamps: true,
}
);


const ProductModel = mongoose.model<ProductDocument>("Product", productSchema);

export default ProductModel;