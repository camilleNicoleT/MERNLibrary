const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://camille-admin:s7pF+jBCkGKnXT4@cluster0.dg6v2.mongodb.net/BookTracker?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});

module.exports = mongoose.connection;
