const express = require('express');
const app = express();
const cors = require('cors');

// Sample JSON data (your db.json content)
const data = require('./db.json');

// app.use(cors('https://uxquility.vercel.app'));

// Allow requests only from specific origin
app.use(cors({
  origin: 'https://uxquility-fkxohyhdv-lokeshkumawat1225s-projects.vercel.app'
}));

// Endpoint for pagination
app.get('/products', (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
  const limit = parseInt(req.query.limit) || 10; // Default to limit 5 if not specified

  // Calculate start and end indices for pagination
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  // Slice the data array to get the subset for the current page
  const results = data.products.slice(startIndex, endIndex);

  // Prepare pagination metadata
  const metadata = {
    total_items: data.products.length,
    page,
    limit,
    total_pages: Math.ceil(data.products.length / limit)
  };

  // Return subset of data along with pagination metadata
  res.json({ metadata, results });
});

// Endpoint to get product by ID
app.get('/products/:slug', (req, res) => {
  const productSlug = req.params.slug;
  const product = data.products.find(p => p.slug === productSlug);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Allow requests only from specific origin

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
