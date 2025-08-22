import { Hono } from 'hono'

type Bindings = {
    TEST_VAR: string,
    KV: KVNamespace
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', async (c) => {
    c.env.KV.put('key', 'value');
    const value = await c.env.KV.get('key');
    return c.text(`Env var: ${c.env.TEST_VAR} and -- ${value}`);
})

export default app
