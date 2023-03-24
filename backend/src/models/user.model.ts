import { model, Schema } from "mongoose";

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  adress: string;
  isAdmin: boolean;
}

export const UserSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    adress: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

export const userModel = model<User>("user", UserSchema);
