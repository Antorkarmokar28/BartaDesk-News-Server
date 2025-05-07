import { Router } from 'express';
import validationRequest from '../../middlewares/validationRequest';
import { categoryZodSchema } from './category.validation';
import { CategoryController } from './category.controller';
import auth from '../../middlewares/auth';
import { User_Role } from '../user/user.constant';

const router = Router();

router.post(
  '/create-category',
  auth(User_Role.admin, User_Role.editor),
  validationRequest(categoryZodSchema),
  CategoryController.createCategory
);

router.get(
  '/',
  auth(User_Role.admin, User_Role.editor),
  CategoryController.getAllCategory
);

export const categoryRouter = router;
