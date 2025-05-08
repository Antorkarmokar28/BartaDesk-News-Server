import { NextFunction, Request, Response, Router } from 'express';
import { upload } from '../../utils/fileUploads';
import validationRequest from '../../middlewares/validationRequest';
import { UserValidationSchema } from './user.validation';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { User_Role } from './user.constant';

const router = Router();
router.post(
  '/register',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validationRequest(UserValidationSchema.registerUserValidationSchema),
  UserController.registerUser
);

router.get('/', UserController.getAllUser);

router.get('/:_id', UserController.getSingleUser);

router.patch(
  '/:_id',
  auth(User_Role.admin, User_Role.editor, User_Role.reporter),
  validationRequest(UserValidationSchema.updateRegisterUserValidationSchema),
  UserController.updateUser
);

router.delete('/:_id', UserController.deleteUser);

export const userRouter = router;
