import config from "config";
import { get } from "lodash";
import { FilterQuery, UpdateQuery } from "mongoose";
import SessionModel, { SessionDocument } from "../models/sessions.model"
import UserModel from "../models/user.model";
import { signJwt, verifyJwt } from "../utils/jwt.utils";
import { findUser } from "./user.service";

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

export const reIssueAccessToken = async({refreshToken,}:{ refreshToken: string})=>{
  const {decoded} = verifyJwt(refreshToken);

  if(!decoded || !get(decoded, "_id")) return false;

  const session = await SessionModel.findById(get(decoded, "_id"));

  if (!session || !session.valid) return false;

  const user = await findUser({_id: session.user});

  if(!user) return false;

  const accessToken = signJwt(
    {...user, session: session._id,}, 
    {expiresIn: config.get<string>("accessTokenTtl") });

  return accessToken;
}