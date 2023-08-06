import dotenv from 'dotenv';
import { Bot } from 'grammy';
dotenv.config();

const token: any = process.env.TELEGRAM_TOKEN;
console.log(token)
const bot = new Bot(token);

bot.command("start", (ctx) => ctx.reply("Welcome up and running"));
bot.command("message", (ctx) => ctx.reply("Got another message!"));

bot.start();