import { Markup, Telegraf } from 'telegraf';

import { Command } from './command.class';
import { IBotContext } from '../context/context.interface';

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle(): void {
    this.bot.start(ctx => {
      console.log(ctx.session);
      ctx.reply(
        'Вам понравилось?',
        Markup.inlineKeyboard([
          Markup.button.callback('👍', 'like'),
          Markup.button.callback('👎', 'dislike'),
      ]))
    });

    this.bot.action('like', ctx => {
      ctx.session.isLike = true;
      ctx.editMessageText('🎉 Круто!');
    })

    this.bot.action('dislike', ctx => {
      ctx.session.isLike = false;
      ctx.editMessageText('😒 спасибо за Ваш голос!');
    })
  }
}
