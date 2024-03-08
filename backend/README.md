### Configuration

- Configuration is read from environment variables (see [Twelve-Factor App (Config)](https://12factor.net/config)).
- Config schema is defined as `zod.object` in the `src/config/index.ts` module.
- `.env.example` file is generated directly from the schema using `env:generate` script.

### Translations

- Translations are defined in `src/translations` directory.
- English (`lang_en.ts`) is the base translation.
