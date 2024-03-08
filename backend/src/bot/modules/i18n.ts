import type { InstallFn } from '.'
import type { Translation } from '~/translations'
import translations from '~/translations'

export type I18nFlavor = {
  t: Translation
}

export const install: InstallFn<I18nFlavor> = (bot) => {
  bot.use((ctx, next) => {
    // @todo
    ctx.t = translations.en
    return next()
  })
}
