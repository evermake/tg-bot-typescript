import { createBot } from './bot'
import { loadConfigFromEnv } from './config'
import { createLogger } from './logging'

async function main() {
  const config = loadConfigFromEnv()
  const logger = createLogger({
    level: 'debug',
    pretty: true,
  })
  const bot = createBot({
    token: config.bot.token,
    logger: logger,
  })

  await bot.start()
}

main()
