import { type } from "os";
import {object, string, TypeOf} from "zod"

//validation schema requirement for creating a new user
export const createUserSchema = object({
    body: object({
       name: string({
        required_error: "Name is required"
       }),
       password: string({
        required_error: "Password is required"
       }).min(6, "Password too short - should be 6 chars minimum").max(8, "Password too long - should be 8 chars maximum"),
       passwordConfirmantion: string({required_error: "passwordConfirmation is required"}),
       email: string({required_error: "Email is required"}).email("not a valid email")
    }).refine((data)=> data.password === data.passwordConfirmantion, {
        message: "password do not match",
        path: ["passwordConfirmation"],
    }),
   
});


//interface for user inputs
export type createUserInput = Omit<TypeOf<typeof createUserSchema>,"body.passwordConfirmation">;