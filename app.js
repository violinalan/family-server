const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8080;
const db = require("./queries");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/scotts', db.getScotts);

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))