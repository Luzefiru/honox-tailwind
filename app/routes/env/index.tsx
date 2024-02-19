import { createRoute } from 'honox/factory';
import { env } from 'hono/adapter';

export default createRoute((c) => c.json({ env: env(c) }));
