#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting static development server...');

const viteProcess = spawn('npx', ['vite', '--config', 'vite.config.static.ts', '--host', '0.0.0.0', '--port', '5173'], {
  stdio: 'inherit',
  cwd: process.cwd()
});

viteProcess.on('close', (code) => {
  console.log(`Development server exited with code ${code}`);
});

process.on('SIGINT', () => {
  console.log('\n👋 Shutting down development server...');
  viteProcess.kill('SIGINT');
  process.exit(0);
});