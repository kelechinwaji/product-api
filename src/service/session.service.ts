import { FilterQuery } from "mongoose";
import SessionModel, { SchemaDocument } from "../models/sessions.model"
import UserModel from "../models/user.model";

export const createSession = async (userId: string, userAgent: string)=>{
    const session = await SessionModel.create({user: userId, userAgent});

    return session.toJSON();
}

//queries the Db to find the session
//lean function would return the plain object
export const findSessions = (query: FilterQuery<SchemaDocument>)=>{
  return SessionModel.find(query).lean
}