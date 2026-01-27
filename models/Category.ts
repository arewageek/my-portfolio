import mongoose, { Schema, Model, models } from "mongoose";

export interface ICategory {
  name: string;
  slug: string;
  description?: string;
  color?: string;
  parent?: mongoose.Types.ObjectId | string | null;
}

const CategorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: String,
    color: String,
    parent: { type: Schema.Types.ObjectId, ref: "Category", default: null },
  },
  { timestamps: true }
);

const Category: Model<ICategory> =
  models.Category || mongoose.model<ICategory>("Category", CategorySchema, "categories");

export default Category;
