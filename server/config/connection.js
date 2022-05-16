const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'https://blooming-tor-92645.herokuapp.com/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});

module.exports = mongoose.connection;
