import { Hono } from "hono";
import { Index } from "./pages/index";

type Bindings = { ASSETS: Fetcher };
const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => c.html(<Index />));

app.notFound((c) => c.env.ASSETS.fetch(c.req.raw));

export default app;
