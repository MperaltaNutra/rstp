import express, { Application, Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'path';

// @ts-expect-error
import Stream from 'node-rtsp-stream';

const app: Application = express();

// Motor de plantilla
app.set('view engine', 'ejs');
app.set('views', path.resolve('src/views'));

app.get('/', (req: Request, res: Response) => {
	res.render('index', { titulo: 'inicio EJS' });
});

// Settings
app.use(require('express').static(path.resolve('src/public')));
app.set('port', process.env.PORT || 5050);

export default app;
