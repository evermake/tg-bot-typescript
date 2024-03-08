import process from 'node:process'
import dotenv from 'dotenv'
import { z } from 'zod'
import { createOptionsObject, getOptionsFromZodObject } from './parsing'

export const Config = z.object({
  postgresUrl: z.string().describe('Postgres database connection URI.\nExample: postgresql://USER:PASSWORD@HOST:PORT/DATABASE'),

  bot: z.object({
    token: z.string().describe('Telegram Bot API token.\nExample: 123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11'),
  }),
})
export type Config = z.infer<typeof Config>

export function loadConfigFromEnv(path?: string): Config {
  dotenv.config({ path })

  const options = createOptionsObject(
    getOptionsFromZodObject(Config._def),
    process.env,
  )

  const parseResult = Config.safeParse(options)
  if (parseResult.success) {
    return parseResult.data
  }

  throw new Error(`Configuration loading failed: ${parseResult.error.message}`)
}
