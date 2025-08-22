import { Hono } from 'hono'

type Bindings = {
    TEST_VAR: string,
    KV: KVNamespace
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', async (c) => {
    c.env.KV.put('key', 'value');
    const value = await c.env.KV.get('key');
    const R1 = await c.env.KV.get('R1');
    return c.text(`Env var: ${c.env.TEST_VAR} and -- ${value} and R1=${R1}`);
})

export default app
