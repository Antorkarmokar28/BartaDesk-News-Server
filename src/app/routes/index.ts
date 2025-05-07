import { Router } from "express";
import { userRouter } from "../modules/user/user.route";
import { authRouter } from "../modules/auth/auth.route";
const router = Router();
const modulesRoute = [
  {
    path: "/users",
    route: userRouter,
  },
  {
    path: "/auth",
    route: authRouter,
  },
];

modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;
