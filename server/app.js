const express = require('express');
const bodyParser = require('body-parser');
const baseRoutes = require('./routes/base-routes');
const whatsAppRoutes = require('./routes/whatsapp-routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(baseRoutes)
app.use(whatsAppRoutes)

app.listen('3000', () => {
    console.log('Server is listening to port 3000...');
});
