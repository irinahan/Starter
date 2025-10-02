#!/usr/bin/env node
import { Command } from 'commander';
import { Legion } from '../../sdk/js/dist/index.js';
import fs from 'fs';

const program = new Command();
program
  .name('legion')
  .description('CLI for legion.cc mock API')
  .version('0.1.0');

program.command('status')
  .description('Check API health')
  .action(async () => {
    const baseUrl = process.env.LEGION_API_URL || 'http://localhost:3000';
    const apiKey = process.env.LEGION_API_KEY || 'demo-key';
    const client = new Legion(baseUrl, apiKey);
    const res = await client.health();
    console.log(res);
  });

program.command('account <address>')
  .description('Get account info')
  .action(async (address) => {
    const baseUrl = process.env.LEGION_API_URL || 'http://localhost:3000';
    const apiKey = process.env.LEGION_API_KEY || 'demo-key';
    const client = new Legion(baseUrl, apiKey);
    const res = await client.getAccount(address);
    console.log(res);
  });

program.command('echo <jsonFile>')
  .description('POST /v1/echo with JSON file')
  .action(async (jsonFile) => {
    const baseUrl = process.env.LEGION_API_URL || 'http://localhost:3000';
    const apiKey = process.env.LEGION_API_KEY || 'demo-key';
    const client = new Legion(baseUrl, apiKey);
    const payload = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));
    const res = await client.echo(payload);
    console.log(res);
  });

program.parse();
