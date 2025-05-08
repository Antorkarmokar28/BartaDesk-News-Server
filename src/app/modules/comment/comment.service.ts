import { StatusCodes } from 'http-status-codes';
import AppError from '../../error/appError';
import { IComment } from './comment.interface';
import { Comment } from './comment.model';

const createCommentIntoDB = async (payload: IComment) => {
  const result = await Comment.create(payload);
  return result;
};

const getAllCommentFromDB = async () => {
  const result = await Comment.find();
  return result;
};

const getSingleCommentFromDB = async (_id: string) => {
  const comment = await Comment.findOne({ _id });
  if (!comment) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Sorry comment is not found');
  }
  return comment;
};

const updateCommentIntoDB = async (id: string, payload: Partial<IComment>) => {
  const comment = await Comment.findByIdAndUpdate(id, payload, { new: true });
  if (!comment) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Sorry comment is not found');
  }
  return comment;
};

const deleteCommentFromDB = async (_id: string) => {
  const comment = await Comment.findByIdAndDelete({ _id });
  if (!comment) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Sorry comment is not found');
  }
  return comment;
};

export const CommentService = {
  createCommentIntoDB,
  getAllCommentFromDB,
  getSingleCommentFromDB,
  updateCommentIntoDB,
  deleteCommentFromDB,
};
