import { showRoutes } from 'hono/dev';
import { logger } from 'hono/logger';
import { createApp } from 'honox/server';

const app = createApp();

// Development Utilities
showRoutes(app, { colorize: true });
app.use(logger());

export default app;
