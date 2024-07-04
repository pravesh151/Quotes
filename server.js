const express = require('express');
const app = express();
const connectDB  = require("./Config/dbConnection")
const { quotes } = require('./data');
const { addQuotes, FetchRouter } = require('./Router/Coats');
// const { getRandomElement } = require('./utils');
app.use(express.json())
const PORT = process.env.PORT || 4001;
connectDB()
app.use(express.static('public'));
// app.use(morgan('dev'));
app.use('/add',addQuotes,)
app.use('/get',FetchRouter,)

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
