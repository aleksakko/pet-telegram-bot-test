import { Context } from 'telegraf';

export interface SessionData {
  isLike: boolean;
}

export interface IBotContext extends Context {
  session: SessionData;
}
