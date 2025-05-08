import { StatusCodes } from 'http-status-codes';
import catchAsynch from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserService } from './user.service';

const registerUser = catchAsynch(async (req, res) => {
  const payload = req.body;
  const result = await UserService.registerUserIntoDB(req.file, payload);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'User register is successfully',
    data: result,
  });
});

const getAllUser = catchAsynch(async (req, res) => {
  const query = req.query;
  const result = await UserService.getAllUserFromDB(query);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'User retrieved is successfully',
    data: result,
  });
});

const getSingleUser = catchAsynch(async (req, res) => {
  const { _id } = req.params;
  const result = await UserService.getSingleUserFromDB(_id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'User delete is successfully',
    data: result,
  });
});

const updateUser = catchAsynch(async (req, res) => {
  const { _id } = req.params;
  const result = await UserService.updateUserIntoDB(_id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'User update is successfully',
    data: result,
  });
});

const deleteUser = catchAsynch(async (req, res) => {
  const { _id } = req.params;
  const result = await UserService.deleteUserFromDB(_id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'User delete is successfully',
    data: result,
  });
});

export const UserController = {
  registerUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
