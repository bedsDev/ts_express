import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();import { getUser } from "@services/userService";
import { log } from "@utils/logger";

const app: Express = express();
const PORT: string | number = process.env.PORT || 5000; 

app.get("/*", (req: Request, res: Response) => {
  log("GET /*");
  log(JSON.stringify(req.hostname));
  log(JSON.stringify(req.ip));
  getUser();
  res.send(`<h1>Hello World: Express and TypeScript!</h1>
    <p><b>Hostname</b>: ${req.hostname}</p>  
    <p><b>app</b>: ${req.app}</p>  
    <p><b>baseUrl</b>: ${req.baseUrl}</p>  
    <p><b>body</b>: ${req.body}</p>  
    <p><b>params</b>: ${JSON.stringify(req.params)}</p>  
    <p><b>path</b>: ${req.path}</p>  
    <p><b>query</b>: ${JSON.stringify(req.query)}</p>  
    <p><b>route</b>: ${JSON.stringify(req.route)}</p>
    <p><b>url</b>: ${JSON.stringify(req.url)}</p>
    `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});