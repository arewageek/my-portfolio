
import mongoose, { Schema, Model, models } from "mongoose";

export interface IBackEndProject {
  title: string;
  category: string;
  description?: string;
  image: string;
  status: string;
  technologies: string[];
  links?: {
    demo?: string;
    github?: string;
    live?: string;
  };
  metrics?: Record<string, any>;
  companyId?: mongoose.Types.ObjectId; 
  createdAt?: Date;
  updatedAt?: Date;
}

const ProjectSchema = new Schema<IBackEndProject>(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: String,
    image: { type: String, required: true },
    status: { type: String, required: true },
    technologies: [String],
    links: {
      demo: String,
      github: String,
      live: String,
    },
    metrics: Schema.Types.Mixed,
    companyId: { type: Schema.Types.ObjectId, ref: "Company" },
  },
  { timestamps: true }
);

const Project: Model<IBackEndProject> =
  models.Project || mongoose.model<IBackEndProject>("Project", ProjectSchema);

export default Project;
