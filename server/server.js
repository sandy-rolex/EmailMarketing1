const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const dbconfig = require('./config/dbConfig');
const port = process.env.PORT || 5000;

const usersRoute = require ("./routes/usersRoute");

app.use('/api/users', usersRoute);

app.listen(port, () => console.log (`Node/Express server started on port ${port}`));