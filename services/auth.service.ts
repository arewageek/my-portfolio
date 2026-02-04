import bcrypt from "bcryptjs";
import dbConnect from "../lib/db";
import Admin, { IAdmin } from "../models/Admin";

export class AuthService {
  static async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  static async verifyPassword(password: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(password, hashed);
  }

  static async createAdmin(data: { name: string; email: string; password: string }) {
    await dbConnect();
    
    // Check if admin already exists
    const existing = await Admin.findOne({ email: data.email });
    if (existing) {
      throw new Error("Admin with this email already exists");
    }

    const hashedPassword = await this.hashPassword(data.password);
    
    const admin = await Admin.create({
      ...data,
      password: hashedPassword,
    });

    const adminObj = admin.toObject() as IAdmin;
    delete adminObj.password;
    return adminObj;
  }

  static async authenticateAdmin(email: string, password: string) {
    await dbConnect();
    
    const admin = await Admin.findOne({ email }).select("+password");
    if (!admin) {
      return null;
    }

    const isValid = await this.verifyPassword(password, admin.password!);
    if (!isValid) {
      return null;
    }

    const adminObj = admin.toObject() as IAdmin;
    delete adminObj.password;
    return adminObj;
  }

  static async getAdminById(id: string) {
    await dbConnect();
    const admin = await Admin.findById(id);
    if (!admin) return null;
    const adminObj = admin.toObject() as IAdmin;
    delete adminObj.password;
    return adminObj;
  }
}
