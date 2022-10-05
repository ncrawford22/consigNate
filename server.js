const express = require('express');
const app = express();
require('dotenv').config();
const mongoConfig = require('./config');
const methodOverride = require('method-override');

const PORT = process.env.PORT;

// View Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride('_method'));

// Routes
app.use('/shoes', require('./routes/shoeRoutes'));
app.use('/apparel', require('./routes/apparelRoutes'));
app.use('/home', require('./routes/homeRoute'));

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));

mongoConfig();