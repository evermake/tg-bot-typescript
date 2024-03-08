import type { Bot, Context } from 'grammy'
import * as i18n from './i18n'
import * as logging from './logging'
import * as floodControl from './flood-control'

// eslint-disable-next-line ts/ban-types
export type InstallFn<F = {}, O = undefined> =
  O extends undefined
    ? <C extends Context & F>(bot: Bot<C>) => void
    : <C extends Context & F>(bot: Bot<C>, options: O) => void

export default {
  i18n,
  logging,
  floodControl,
}
