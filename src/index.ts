import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();import { getUser } from "@services/userService";
import { log } from "@utils/logger";

const app: Express = express();
const PORT: string | number = process.env.PORT || 5000; 

app.get("/", (req: Request, res: Response) => {
  log("GET /");
  getUser();
  res.send("Hello World: Express and TypeScript");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});