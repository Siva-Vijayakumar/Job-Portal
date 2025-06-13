import express from 'express';
import './config/instrument.js';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import * as Sentry from "@sentry/node";
import { clerkwebhooks } from './controllers/webhooks.js';

const app = express();
await connectDB();

app.use(cors());
app.use(express.json());

app.post('/webhooks', express.raw({ type: 'application/json' }), clerkwebhooks);

app.get('/', (req, res) => res.send('API Working'));
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

const PORT = process.env.port || 5000;
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})