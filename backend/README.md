### Configuration

- Config is read from the environment variables (see [Twelve-Factor App (Config)](https://12factor.net/config)).
- Config schema is defined as `zod.object` in the `src/config/index.ts` module.
- `.env.example` can be generated directly from the schema using the `env:generate` script.

### Translations

- Translations are defined in the `src/translations` directory.
- English (`_en.ts`) is the base translation.
