
import { Bot } from 'grammy';
import { RowDataPacket } from 'mysql2';
import mysql, { FieldPacket } from 'mysql2/promise';

const dbURI: string = process.env.DATABASE_URL!;
const token: any = process.env.TELEGRAM_TOKEN;
const bot = new Bot(token);

console.log(process.env.ENV_TYPE);

const connection = mysql.createConnection(dbURI).then((conn) => conn.query('SELECT * FROM `usuario`;')).then(([rows, fields]) => {
    console.log(rows);
});


bot.command("user", (ctx: any) => {
    const user = ctx.message?.from;
    console.log(user)
})

bot.command("init", (ctx: any) =>
    ctx.reply(`Bienvenido a 🐷Micochinito🐷\nBot que te ayudará con tus finanzas personales.🚀
\nLa primer herramienta (beta) es poder facilitarte con qué tarjeta de crédito pagar en base a la fecha de corte de tu tarjeta más lejana
y así tener más días de liquidez.
Antes de poder utilizar esta herramienta acá te dejo los comandos disponibles por el momento:\n
👉 utilizar comando /alta para para dar de alta una nueva tarjeta.\n
👉 utilizar comando /listar para enlistar las tarjetas dadas de alta.\n
👉 utilizar comando /baja para dar de baja alguna tarjeta la cual ya no planeas utilizar.\n`));


bot.command("alta", (ctx: any) => ctx.reply('alta'));
bot.command("listar", (ctx: any) => ctx.reply('listar'));
bot.command("baja", (ctx: any) => ctx.reply('baja'));

bot.start();