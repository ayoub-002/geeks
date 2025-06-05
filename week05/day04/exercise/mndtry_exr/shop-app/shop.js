// Import from products.js
const products = require('./products');

// Find a product by name
function findProductByName(name) {
  const product = products.find(p => p.name.toLowerCase() === name.toLowerCase());

  if (product) {
    console.log("Product found:", product);
  } else {
    console.log(`Product "${name}" not found.`);
  }
}

// Try finding a few products
findProductByName("Laptop");
findProductByName("Pen");
findProductByName("Table");  // This one doesn't exist

