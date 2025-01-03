import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import ViteExpress from 'vite-express';
import path from 'path';
import fs from 'fs/promises';
import xml2js from 'xml2js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const PORT = process.env.VITE_PORT || 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cookieParser());
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello Vite + React!');
});

app.get('/read-xml', async (req, res) => {
  try {
    const filePath = path.join(__dirname, './data/data.xml');
    const data = await fs.readFile(filePath, 'utf8');
    const result = await xml2js.parseStringPromise(data);
    const auditFile = result?.AuditFile;

    if (!auditFile) {
      return res.status(404).send('No auditFile found');
    }

    res.json(auditFile);
  } catch (error) {
    console.error('Error processing XML file:', error);
    res.status(500).send('Error processing XML file');
  }
});

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is listening on port ${PORT}...`)
);

export default app;
