import { ITag } from './tag.interface';
import { Tag } from './tag.model';

const createTagIntoDB = async (payload: ITag) => {
  const result = await Tag.create(payload);
  return result;
};

const getAllTagFromDB = async () => {
  const result = await Tag.find();
  return result;
};

const getSingleTagFromDB = async (id: string) => {
  const result = await Tag.findOne({ id });
  return result;
};

const updateTagIntoDB = async (_id: string, data: ITag) => {
  const result = await Tag.findByIdAndUpdate(_id, data, { new: true });
  return result;
};

const deleteTagFromDB = async (id: string) => {
  const result = await Tag.findByIdAndDelete(id);
  return result;
};

export const TagService = {
  createTagIntoDB,
  getAllTagFromDB,
  getSingleTagFromDB,
  updateTagIntoDB,
  deleteTagFromDB,
};
