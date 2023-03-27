import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { Bot } from 'grammy';
dotenv.config();

const port = process.env.PORT;
const token: any = process.env.TELEGRAM_TOKEN;

const app: Express = express();
const bot = new Bot(token);

app.get("/", (req: Request, res: Response) => res.send("Hello world"));
app.listen(port, () => console.log(`[Telegram bot ⚡] LISTENING at port: ${port}`));
