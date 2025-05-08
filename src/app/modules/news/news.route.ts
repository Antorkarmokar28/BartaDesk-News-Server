import { NextFunction, Request, Response, Router } from 'express';
import validationRequest from '../../middlewares/validationRequest';
import { createNewsZodSchema } from './news.validation';
import { upload } from '../../utils/fileUploads';
import auth from '../../middlewares/auth';
import { User_Role } from '../user/user.constant';
import { NewsController } from './news.controller';

const router = Router();
router.post(
  '/',
  auth(User_Role.admin, User_Role.editor),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validationRequest(createNewsZodSchema),
  NewsController.createNews
);

export const newsRouter = router;
