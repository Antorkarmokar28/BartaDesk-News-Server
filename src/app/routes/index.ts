import { Router } from 'express';
import { userRouter } from '../modules/user/user.route';
import { authRouter } from '../modules/auth/auth.route';
import { categoryRouter } from '../modules/category/category.route';
import { tagRouter } from '../modules/tag/tag.route';
import { newsRouter } from '../modules/news/news.route';
import { commentRouter } from '../modules/comment/comment.route';
const router = Router();
const modulesRoute = [
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/categorys',
    route: categoryRouter,
  },
  {
    path: '/tags',
    route: tagRouter,
  },
  {
    path: '/news',
    route: newsRouter,
  },
  {
    path: '/comments',
    route: commentRouter,
  },
];

modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;
