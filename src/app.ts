import express from 'express';
import cors from 'cors';
import publicRouters from './server/routes/public-routers';
import privateRouters from './server/routes/private-routers';
import config from './server/configuration/config';
import useError from './server/middlewares/useError';
import useNotFound from './server/middlewares/useNotFound';
import { isOriginAllowed } from './infraestructure/sdk/helpers/validator';


const port = config.PORT;
const corsAllowedOrigins = config.CORS_ALLOWED_ORIGINS;

const app = express();

const corsOptions = {
  origin: function(origin, callback) {
    if (origin == undefined || isOriginAllowed(origin, corsAllowedOrigins)) { 
      callback(null, true);
    }
    else {
      callback(new Error(`${origin} blocked by CORS`));
    }
  }
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(publicRouters);
app.use(privateRouters);

app.use(useError);
app.use(useNotFound);

app.listen(port, () => {
  console.log(`Server listening on Port: ${port}`);
});
