# honox-tailwind

A proof of concept to showcase the power of **HonoX** & **JSX** templating with **React Hook Client Components**, integrated with **TailwindCSS** hot reload local development functionality - to be hosted on the edge via **Cloudflare Pages**.

### Notes

All [pages](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) & [API routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) are simply [route handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) under `/app/routes` where we can import JSX files to render.

Anything under `/app/islands` will be hydrated with React Hooks as Client Components when imported & rendered in a route handler.

> For more information on Client Components & the *(limited)* hooks available to use, check the [Hono Documentation](https://hono.dev/guides/jsx-dom).

## Usage

```bash
npm install
npm run build    # creates build artifacts in /dist
npm run preview  # imitates a Cloudflare Pages environment using /dist
```

## Deployment 

```bash
npm run deploy   # deploys to Cloudflare Pages using Wrangler
```

## Environment Variables

You can use environment variables which are injected by Vite during the development or build step.

```bash
touch .env.development # used with `vite`
touch .env.production  # used with `vite build`
```

> [!CAUTION]
> This is different from the [vars] created by wrangler.toml and are injected into your build artifacts, so do not put any important secrets here.

### Hono Environment Variables

```bash
cp wrangler.toml.example wrangler.toml
```

The values in `wrangler.toml` are not substitued in the build artifacts, and are only accessible in your local development environment using `env(c)`.

For production deployments on Cloudflare Pages, you must configure them in your environment variables configuration in Cloudflare Dashboard. Once that is set, you can access the Dashboard variables in your Cloudflare Pages deployment via `env(c)`.

```toml
# wrangler.toml
[vars]
SUPABASE_URL = "your-supabase-url"
SUPABASE_ANON_KEY = "your-supabase-anon-key"
BASE_URL = "https://your-cloudflare-deployment-url"
```

> [!TIP]
> Use these for secrets you would like to use in development with `env(c)`.

```ts
import { createRoute } from 'honox/factory';
import { env } from 'hono/adapter';

export default createRoute((c) => c.json({ env: env(c) }));
// {
//   env: {
//     SUPABASE_URL: "your-supabase-url",
//     SUPABASE_ANON_KEY: "your-supabase-anon-key",
//     BASE_URL: "http://127.0.0.1:8787/",
//     HELLO: "WORLD",
//     ASSETS: { }
//   }
// }
```

> [!CAUTION]
> For actual production secrets that need to be accessed in `env(c)`, follow [the Cloudflare docs](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard) to set your environment variables in your dashboard.