import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const API_KEY = process.env.LEGION_API_KEY || 'demo-key';

// Simple auth middleware for non-public endpoints
function auth(req, res, next) {
  if (req.path === '/v1/health') return next();
  const auth = req.headers.authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (token !== API_KEY) return res.status(401).json({ error: 'Unauthorized' });
  next();
}

app.use(auth);

app.get('/v1/health', (req, res) => res.json({ ok: true }));

app.get('/v1/accounts/:address', (req, res) => {
  const { address } = req.params;
  // mock value
  res.json({ address, balance: '123.456' });
});

app.post('/v1/echo', (req, res) => {
  res.json({ received: req.body || {} });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`legion.cc mock server listening on http://localhost:${port}`);
});
