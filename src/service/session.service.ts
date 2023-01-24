import { FilterQuery, UpdateQuery } from "mongoose";
import SessionModel, { SessionDocument } from "../models/sessions.model"
import UserModel from "../models/user.model";

export const createSession = async (userId: string, userAgent: string)=>{
    const session = await SessionModel.create({user: userId, userAgent});

    return session.toJSON();
}

//queries the Db to find the session
//lean function would return the plain object
export const findSessions = (query: FilterQuery<SessionDocument>)=>{
  return SessionModel.find(query).lean
}

export const updateSession = (query: FilterQuery<SessionDocument>, update: UpdateQuery<SessionDocument>)=>{
  return SessionModel.updateOne(query, update);
}