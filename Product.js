const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/your-database-name', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = Product;