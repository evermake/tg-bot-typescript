import type { Context } from 'grammy'
import type { LoggingFlavor } from './modules/logging'
import type { I18nFlavor } from './modules/i18n'

export type Ctx =
  & Context
  & LoggingFlavor
  & I18nFlavor
