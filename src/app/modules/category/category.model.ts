import mongoose, { model } from 'mongoose';
import { ICategory } from './category.interface';

const categorySchema = new mongoose.Schema<ICategory>({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  description: String,
});

export const Category = model<ICategory>('Category', categorySchema);
