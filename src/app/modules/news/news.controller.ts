import { StatusCodes } from 'http-status-codes';
import catchAsynch from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { NewsService } from './news.service';

const createNews = catchAsynch(async (req, res) => {
  const result = await NewsService.createNewsIntoDB(req.file, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'News created successfully',
    data: result,
  });
});

const getAllNews = catchAsynch(async (req, res) => {
  const query = req?.query;
  const result = await NewsService.getAllNewsFromDB(query);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'All news is retrieved successfully',
    data: result,
  });
});

const getSingleNews = catchAsynch(async (req, res) => {
  const { _id } = req.params;
  const result = await NewsService.getSingleNews(_id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'News is retrieved successfully',
    data: result,
  });
});

const updateNews = catchAsynch(async (req, res) => {
  const { _id } = req.params;
  const result = await NewsService.updateNewsIntoDB(_id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'News update is successfully',
    data: result,
  });
});

const deleteNews = catchAsynch(async (req, res) => {
  const { _id } = req.params;
  const result = await NewsService.deleteNewsFromDB(_id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'News update is successfully',
    data: result,
  });
});

export const NewsController = {
  createNews,
  getAllNews,
  getSingleNews,
  updateNews,
  deleteNews,
};
