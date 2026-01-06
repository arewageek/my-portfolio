import mongoose, { Schema, Model, models } from "mongoose";

export interface IAdmin {
  name: string;
  email: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const AdminSchema = new Schema<IAdmin>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
  },
  { timestamps: true }
);

const Admin: Model<IAdmin> =
  models.Admin || mongoose.model<IAdmin>("Admin", AdminSchema);

export default Admin;
