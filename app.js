const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Products');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the application'})
})

// Database connection
mongoose.connect('mongodb+srv://Assignment2:Harshsharma2611@assignment2.vvm0a29.mongodb.net/Assignment2?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Define routes here

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});