const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL);

console.log(process.env.DATABASE_URL);

const Book = require('./book/book1');

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
  await seed();
}

async function seed() {

  await Book.create({
    name: 'The Self-Taught Programmer',
    author: 'Cory Althoff',
    year: 2017,

  });

  console.log('Read Self-Taught Programmer');

  await Book.create({
    name: 'Don`t Make Me Think, Revisited: A Common Sense Approach to Web Usability',
    author: 'Steve Krug',
    year: 2013,
  });

  console.log('Read Don`t Make me Think');

  await Book.create({
    name: 'The 1,000,000 Web Designer Guide',
    author: 'Rob Anthony O`Rourke',
    year: 2021,

  });

  console.log('Read Web Designer Guide');




  mongoose.disconnect();
}

main();