import * as mongoose from 'mongoose';

import { keys } from './config/index';
import { cors } from './middlewares/cors.middleware';
import { express } from './extentions/express';
import { routes } from './routes';

const app = express();
const bodyParser = require('body-parser');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(cors);
app.use('/uploads', express.static('uploads'))
routes(app);

const httpServer = app.listen(4000, () => {
    console.log('HTTP Server running at http://localhost:' + httpServer.address()['port']);
});













