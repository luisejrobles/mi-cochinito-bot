import dotenv from 'dotenv';
import { Bot } from 'grammy';
dotenv.config();

const token: any = process.env.TELEGRAM_TOKEN;
const bot = new Bot(token);

bot.command("init", (ctx) =>
    ctx.reply(`Bienvenido a 🐷Micochinito🐷\nBot que te ayudará con tus finanzas personales.🚀
\nLa primer herramienta (beta) es poder facilitarte con qué tarjeta de crédito pagar en base a la fecha de corte de tu tarjeta más lejana.
Antes de poder utilizar esta herramienta acá te dejo los comandos disponibles por el momento:\n
👉 utilizar comando /alta para para dar de alta una nueva tarjeta.\n
👉 utilizar comando /listar para enlistar las tarjetas dadas de alta.\n
👉 utilizar comando /baja para dar de baja alguna tarjeta la cual ya no planeas utilizar.\n`));

bot.command("alta", (ctx) => ctx.reply('alta'));
bot.command("listar", (ctx) => ctx.reply('listar'));
bot.command("baja", (ctx) => ctx.reply('baja'));

bot.command("alta tarjeta", (ctx) => ctx.reply("Welcome up and runninggg"));
bot.command("message", (ctx) => ctx.reply("Got another message!"));

bot.start();