import http from 'node:http';
import fs from 'node:fs';
import express from 'express';
const app = express();
// Below block was needed to use __dirname variable since I am not using CJS. Look into this further.
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact-me', (req, res) => {
  res.sendFile('./contact-me.html', { root: __dirname });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`listening to express app on port ${PORT}!`);
});
