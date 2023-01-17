import SessionModel from "../models/sessions.model"
import UserModel from "../models/user.model";

export const createSession = async (userId: string, userAgent: string)=>{
    const session = await SessionModel.create({user: userId, userAgent});

    return session.toJSON();
}

