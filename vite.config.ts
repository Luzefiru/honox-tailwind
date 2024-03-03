import pages from '@hono/vite-cloudflare-pages';
import honox from 'honox/vite';
import client from 'honox/vite/client';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const globalConfig = {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './app'),
      },
    },
  };

  if (mode === 'client') {
    return {
      ...globalConfig,
      plugins: [client()],
    };
  } else {
    return {
      ...globalConfig,
      plugins: [honox(), pages()],
      build: {
        assetsDir: 'static',
        ssrEmitAssets: true,
      },
    };
  }
});
