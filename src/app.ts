import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from './config/swagger';
import { router } from './api/routes';
import { errorHandler } from './api/middleware/error-handler.middleware';
import { scheduleCleanup } from './infrastructure/cron/cleanupScheduler';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(router);

app.use(errorHandler)

scheduleCleanup();

export default app;
