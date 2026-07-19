import mongoose, { Schema, Model, models } from "mongoose";

export interface ICategory {
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

const CategorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: String,
    color: String,
  },
  { timestamps: true }
);

const Category: Model<ICategory> =
  models.Category || mongoose.model<ICategory>("Category", CategorySchema, "categories");

export default Category;
