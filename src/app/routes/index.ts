import { Router } from "express";
import { userRouter } from "../modules/user/user.route";
const router = Router();
const modulesRoute = [
  {
    path: "/users",
    route: userRouter,
  },
];

modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;
