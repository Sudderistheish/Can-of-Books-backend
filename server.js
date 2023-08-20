'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.DATABASE_URL);

app.get('/', (request, response) => {

    response.send('test request received');

});

app.get('/book', async (request, response) => {
    try {
        if (request.query.name) {
            const book = await book.find({ name: request.query.name })
            response.send([book]);
        } else {
            const book = await book.find({});
            if (Object.keys(book).length === 0) response.send([])
            response.send(book);
        }

    } catch (error) {
        console.error(error);
        response.send(error);

    }
});


app.listen(PORT, () => console.log(`listening on ${PORT}`));