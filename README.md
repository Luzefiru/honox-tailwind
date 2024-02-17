## Usage

```bash
npm install
npm run build
npm run preview
```

## Environment Variables

You can use environment variables which are substituted by Vite during the development or build step.

```bash
touch .env.development # used with `vite`
touch .env.production  # used with `vite build`
```

> Note: This is different from the [vars] created by wrangler.toml since we cannot access them from a router's context with the 'hono/adapter' env method.
