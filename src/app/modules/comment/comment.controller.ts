import { StatusCodes } from 'http-status-codes';
import catchAsynch from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CommentService } from './comment.service';

const createComment = catchAsynch(async (req, res) => {
  const result = await CommentService.createCommentIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Comment is successfully',
    data: result,
  });
});

const getAllComment = catchAsynch(async (req, res) => {
  const result = await CommentService.getAllCommentFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'All comment is retrieved successfully',
    data: result,
  });
});

const getSingleComment = catchAsynch(async (req, res) => {
  const { _id } = req.params;
  const result = await CommentService.getSingleCommentFromDB(_id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Comment is retrieved successfully',
    data: result,
  });
});

const updateComment = catchAsynch(async (req, res) => {
  const { _id } = req.params;
  const result = await CommentService.updateCommentIntoDB(_id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Comment is updated successfully',
    data: result,
  });
});

const deleteComment = catchAsynch(async (req, res) => {
  const { _id } = req.params;
  const result = await CommentService.deleteCommentFromDB(_id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Comment is deleted successfully',
    data: result,
  });
});

export const CommentController = {
  createComment,
  getAllComment,
  getSingleComment,
  updateComment,
  deleteComment,
};
