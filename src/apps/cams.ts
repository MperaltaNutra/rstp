// Modules
import express from 'express';
import Routes from '../router';
import cors from 'cors';
import { Application } from 'express';
const app: Application = express();

//database

// middleware preRoutes
// @ts-expect-error
app.use(cors('*'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
Routes(app);

// Settings
app.set('port', process.env.PORT || 5051);

// print process.argv

export default app;
