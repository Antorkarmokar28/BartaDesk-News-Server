import { Router } from 'express';
import { userRouter } from '../modules/user/user.route';
import { authRouter } from '../modules/auth/auth.route';
import { categoryRouter } from '../modules/category/category.route';
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
];

modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;
