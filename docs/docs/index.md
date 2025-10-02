# Quickstart

Установи и запусти локальный mock-сервер:
```bash
cd server
npm ci
npm run dev
```

Проверь:
```bash
curl http://localhost:3000/v1/health
```

## API-ключ и URL
```bash
export LEGION_API_URL=http://localhost:3000
export LEGION_API_KEY=demo-key
```

## Первый запрос (JS)
```js
import { Legion } from '../sdk/js/dist/index.js';
const client = new Legion(process.env.LEGION_API_URL, process.env.LEGION_API_KEY);
const me = await client.getAccount('0x123');
console.log(me);
```
