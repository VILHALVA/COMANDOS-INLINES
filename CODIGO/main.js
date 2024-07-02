const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Comando /start para dar as boas-vindas e mostrar os botões inline
bot.start((ctx) => {
    ctx.reply(
        'Bem-vindo! Clique em um botão abaixo para saber mais sobre uma linguagem de programação:',
        Markup.inlineKeyboard([
            [Markup.button.callback('Python', 'btn_python')],
            [Markup.button.callback('JavaScript', 'btn_javascript')],
            [Markup.button.callback('Java', 'btn_java')],
            [Markup.button.callback('C#', 'btn_csharp')],
            [Markup.button.callback('Ruby', 'btn_ruby')],
        ])
    );
});

// Manipuladores de ação para os botões inline
bot.action('btn_python', (ctx) => {
    ctx.reply('Python é uma linguagem de programação de alto nível, interpretada e de propósito geral. Ela é conhecida por sua sintaxe clara e legível. É amplamente usada em ciência de dados, aprendizado de máquina, desenvolvimento web e automação de tarefas.');
});

bot.action('btn_javascript', (ctx) => {
    ctx.reply('JavaScript é uma linguagem de programação interpretada, de alto nível, geralmente utilizada no desenvolvimento web para criar páginas interativas. É uma das três principais tecnologias da web, juntamente com HTML e CSS.');
});

bot.action('btn_java', (ctx) => {
    ctx.reply('Java é uma linguagem de programação de alto nível, orientada a objetos e compilada. Ela é amplamente utilizada no desenvolvimento de aplicações empresariais, aplicativos móveis (especialmente Android) e sistemas embarcados.');
});

bot.action('btn_csharp', (ctx) => {
    ctx.reply('C# (pronunciado "C-sharp") é uma linguagem de programação orientada a objetos, desenvolvida pela Microsoft como parte da plataforma .NET. Ela é usada para desenvolver uma ampla variedade de aplicativos, incluindo aplicativos desktop, web e jogos.');
});

bot.action('btn_ruby', (ctx) => {
    ctx.reply('Ruby é uma linguagem de programação de alto nível, interpretada e de propósito geral. É conhecida por sua simplicidade e produtividade. Ruby on Rails, um framework de desenvolvimento web, é uma das suas aplicações mais conhecidas.');
});

bot.launch();
console.log('Bot de Informações sobre Linguagens de Programação está rodando...');
