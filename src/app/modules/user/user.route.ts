import { NextFunction, Request, Response, Router } from 'express';
import { upload } from '../../utils/fileUploads';
import validationRequest from '../../middlewares/validationRequest';
import { UserValidationSchema } from './user.validation';
import { UserController } from './user.controller';

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
export const userRouter = router;
