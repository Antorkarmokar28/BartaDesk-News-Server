import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();
app.use(express.json());
app.use(cors());

const testServer = async (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "BartaDesk-News-Server is running",
  });
};

app.get("/", testServer);

export default app;
