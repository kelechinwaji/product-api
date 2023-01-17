import {DocumentDefinition} from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";

//createuser service handles the interaction between the controller and databse
//createAt and UpdatedAt are omitted to matche the createUserInput interface
export const createUser = async (input: DocumentDefinition<Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">>)=>{
    try {
        return await UserModel.create(input);
    } catch (error: any) {
       throw new Error(error); 
    }

}
