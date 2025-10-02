import { Legion } from '../dist/index.js';

const baseUrl = process.env.LEGION_API_URL || 'http://localhost:3000';
const apiKey = process.env.LEGION_API_KEY || 'demo-key';

const client = new Legion(baseUrl, apiKey);

console.log(await client.health());
console.log(await client.getAccount('0x123'));
console.log(await client.echo({ ping: 'pong' }));
