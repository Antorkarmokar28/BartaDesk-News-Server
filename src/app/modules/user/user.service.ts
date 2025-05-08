/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodes } from 'http-status-codes';
import QueryBuilder from '../../builder/queryBuilder';
import AppError from '../../error/appError';
import { sendImageCloudinary } from '../../utils/fileUploads';
import { userSearchableFields } from './user.constant';
import { IUser } from './user.interface';
import { User } from './user.model';

const registerUserIntoDB = async (file: any, payload: IUser) => {
  // storage image into cloudinary
  const imageName = payload?.name;
  const path = file?.path;
  const { secure_url }: any = await sendImageCloudinary(imageName, path);
  payload.profilePhoto = secure_url;

  const result = await User.create(payload);
  return result;
};

const getAllUserFromDB = async (query: Record<string, unknown>) => {
  const userQuery = new QueryBuilder(User.find(), query)
    .search(userSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await userQuery.modelQuery;
  return result;
};

const getSingleUserFromDB = async (_id: string) => {
  const user = await User.findOne({ _id });
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Sorry user not found');
  }
  return user;
};

const updateUserIntoDB = async (_id: string, payload: Partial<IUser>) => {
  const user = await User.findByIdAndUpdate(_id, payload, { new: true });
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Sorry user not found');
  }
  return user;
};

const deleteUserFromDB = async (_id: string) => {
  const user = await User.findByIdAndUpdate(
    _id,
    { isDeleted: true },
    { new: true }
  );
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Sorry user not found');
  }
  return user;
};

export const UserService = {
  registerUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
};
