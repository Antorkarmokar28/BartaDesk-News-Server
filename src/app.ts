import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandeling from "./app/middlewares/globalErrorHandeling";
import notFound from "./app/middlewares/notFound";
const app: Application = express();
app.use(express.json());
app.use(cors());

// application router
app.use("/api", router);

const testServer = async (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "BartaDesk-News-Server is running",
  });
};

app.get("/", testServer);

// global error handeler
app.use(globalErrorHandeling);
// not found router handeler
app.use(notFound);

export default app;
