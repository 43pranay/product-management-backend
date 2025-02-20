const express = require('express');
const cors = require('cors')
const { initiateMysqlConnection } = require('./config/db');
const bodyParser = require('body-parser');
const routes = require('./routes/product.routes');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');

const app = express();
initiateMysqlConnection()
app.use(cors({ origin: "*" }));

app.use(express.json({ limit: "50mb" }));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));

app.get('/', (req, res ) => {
    res.send("Hello, world!");
});
app.use('/products', routes);

app.use(notFound);

app.use(errorHandler);

export default app;