import { Bot } from 'grammy'
import type { Ctx } from './context'
import modules from './modules'
import type { Logger } from '~/logging'

export function createBot({
  token,
  logger,
}: {
  token: string
  logger: Logger
}): Bot<Ctx> {
  const bot = new Bot<Ctx>(token)

  modules.logging.install(bot, { logger })
  modules.floodControl.install(bot)
  modules.i18n.install(bot)

  return bot
}
