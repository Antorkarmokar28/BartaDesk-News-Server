import { Router } from 'express';
import validationRequest from '../../middlewares/validationRequest';
import {
  makeCommentValidationSchema,
  updateCommentValidationSchema,
} from './comment.validation';
import auth from '../../middlewares/auth';
import { User_Role } from '../user/user.constant';
import { CommentController } from './comment.controller';

const router = Router();
// create comment route
router.post(
  '/',
  auth(User_Role.admin, User_Role.editor, User_Role.reporter),
  validationRequest(makeCommentValidationSchema),
  CommentController.createComment
);
// get all comment route
router.get('/', CommentController.getAllComment);
// get all comment route
router.get('/:_id', CommentController.getSingleComment);
//update coment route
router.patch(
  '/:_id',
  auth(User_Role.admin, User_Role.editor, User_Role.reporter),
  validationRequest(updateCommentValidationSchema),
  CommentController.updateComment
);
//delete comment route
router.delete(
  '/:_id',
  auth(User_Role.admin, User_Role.editor, User_Role.reporter),
  CommentController.deleteComment
);
export const commentRouter = router;
