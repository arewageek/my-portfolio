
import mongoose, { Schema, Model, models } from "mongoose";

export interface IBackEndCompany {
  slug: string;
  name: string;
  role: string;
  location?: string;
  type?: string;
  logo?: string;
  status?: string;
  description?: string;
  achievements?: string[];
  technologies?: string[];
  responsibilities?: string[];
  impact?: {
    value: string;
    label: string;
    description?: string;
  }[];
  overview?: {
    description?: string;
    responsibilities?: string[];
    impact?: string;
  };
  started?: string;
  stopped?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const CompanySchema = new Schema<IBackEndCompany>(
  {
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    location: String,
    type: String,
    logo: String,
    status: String,
    description: String,
    achievements: [String],
    technologies: [String],
    responsibilities: [String],
    impact: [
      {
        value: String,
        label: String,
        description: String,
      },
    ],
    overview: {
      description: String,
      responsibilities: [String],
      impact: String,
    },
    started: String,
    stopped: String,
  },
  { timestamps: true }
);

const Company: Model<IBackEndCompany> =
  models.Company || mongoose.model<IBackEndCompany>("Company", CompanySchema);

export default Company;
