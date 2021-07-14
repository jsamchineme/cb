import * as http from 'http';
import logger from 'src/utils/logger';
import { PORT } from 'src/constants';
import app from './app';

const port = PORT || 8003;

const server = http.createServer(app);

server.listen(port, () => { logger.info(`Application is running on port ${port}`); });

export default app;
