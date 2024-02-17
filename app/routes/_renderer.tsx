import { jsxRenderer } from 'hono/jsx-renderer';
import { Style } from 'hono/css';
import { Script } from 'honox/server';

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <Script src="/app/client.ts" />
        <Style />
        {import.meta.env.PROD ? (
          <link rel="stylesheet" href="/static/assets/style.css" />
        ) : (
          <link rel="stylesheet" href="/app/style.css" />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
});
