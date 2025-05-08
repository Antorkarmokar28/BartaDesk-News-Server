/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendImageCloudinary } from '../../utils/fileUploads';
import { INews } from './news.interface';
import { News } from './news.model';

const createNewsIntoDB = async (file: any, payload: INews) => {
  // storage image into cloudinary
  const imageName = payload?.title;
  const path = file?.path;
  const { secure_url }: any = await sendImageCloudinary(imageName, path);
  payload.thumbnail = secure_url;
  const result = await News.create(payload);
  return result;
};

export const NewsService = {
  createNewsIntoDB,
};
