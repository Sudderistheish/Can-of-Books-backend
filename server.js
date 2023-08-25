'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book1 = require('./book/book1');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.DATABASE_URL);

app.get('/', (request, response) => {

  response.send('test request received');

});

app.get('/books', async (request, response) => {
  try {
    if (request.query.name) {
      const book = await Book1.find({ name: request.query.name });
      response.send(book);
    } else {
      const book = await Book1.find();
      if (Object.keys(book).length === 0) response.send([]);
      response.send(book);
    }

  } catch (error) {
    console.error(error);
    response.send(error);

  }
});

app.post('/books', async (request, response) => {

  try {
    console.log(request.body);
    const newBook = await Book1.create(request.body);
    response.status(200).send(newBook);

  } catch (error) {

    console.error(error);
    response.status(500).send('Error creating book');
  }

});



app.listen(PORT, () => console.log(`listening on ${PORT}`));