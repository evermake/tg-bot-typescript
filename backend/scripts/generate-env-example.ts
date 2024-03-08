import { Config } from '~/config'
import { getOptionsFromZodObject } from '~/config/parsing'

function main() {
  const options = getOptionsFromZodObject(Config._def)

  const lines = []
  const usedNames = new Set<string>()
  for (const option of options) {
    const name = option.envName
    if (usedNames.has(name)) {
      throw new Error(`Duplicate env name: ${name}`)
    }
    usedNames.add(name)

    const descriptionLines = option.description
      ? option.description.split('\n').map(line => `# ${line}`)
      : []

    lines.push(
      ...descriptionLines,
      `${name}=`,
    )
  }

  // eslint-disable-next-line no-console
  console.log(lines.join('\n'))
}

main()
