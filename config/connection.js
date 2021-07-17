require('dotenv').config(); // Pulls from .env file//

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Connected to mongoose db');
});

module.exports = db;

