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

export const NewsController = {
  createNews,
};
