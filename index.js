require('dotenv').config()
const {
    Telegraf
} = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
/**
 * Команды
 */
bot.start((ctx) =>
    ctx.replyWithMarkdown(
        `✋ Welcome on Test PoliWeb Bot.
Я Бот под названием @testpoliwebBot я молодой БОТ. 
Я только учусь. 
Я могу обробатывать команды: /start | /help | /hipster 
Так-же я могу изображать ЭХО. Напиши любое слово.`
    )
)
bot.help((ctx) =>
    ctx.replyWithMarkdown(
        `
*Help for You*
Это Бот @testpoliwebBot. 
Я могу обробатывать команды: /start | /hipster | /help
Так-же я могу изображать ЭХО. 
Напиши мне любое сообщение. ↓`
    )
)
bot.command('author', (ctx) => ctx.replyWithMarkdown(`
Привет от автора! ✋
Автор: *PoliWeb* - web developer
[Я на GitHab →](https://github.com/poliweb)
`))

bot.command('hipster', Telegraf.reply('λ 🤴'))


/**
 * Пасхалки от бота
 * Прослушивание бота на слово "hi, Hi, эхо, ЭХО"
 */
bot.hears('эхо', (ctx) => {ctx.reply('⭕Чекрышка на майбахе⭕')})

bot.hears('ЭХО', (ctx) => {ctx.reply('⭕ЧЕКРЫШКА НА МАЙБАХЕ⭕')})

bot.hears('hi', (ctx) => {
    return ctx.replyWithMarkdown(`
Hi, from Bot. 
My name is Test PoliWeb Bot. 
My nick - @testpoliwebBot
Do you want to know who author is?
Click here /author
`)
})

bot.hears('Hi', (ctx) => {
    return ctx.replyWithMarkdown(`
Hi, from Bot. 
My name is Test PoliWeb Bot. 
My nick - @testpoliwebBot
Do you want to know who author is?
Click here /author
`)
})

/**
 * Скрипт ЭХО для бота
 */
bot.on('message', (ctx) => {
    // console.log(ctx.chat)
    // console.log(ctx.message)
    ctx.telegram.sendCopy(ctx.chat.id, ctx.message);
})

// Запуск бота в консоле по команде: node index.js
bot
    .launch()
    .then(() => {
        console.log('BOT_TOKEN: OK 👍');
        console.log('Run Bot. Бот запущен и работает 👍');
    })
    .catch((err) => {
        console.log(err);
    })
