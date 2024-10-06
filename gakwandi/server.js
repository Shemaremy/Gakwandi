require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50mb' })); 
app.use(express.urlencoded({ limit: '50mb', extended: true }));
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const uniqueValidator = require('mongoose-unique-validator');







// DB Connection
async function connectDB() {
  const uri = process.env.MONGODB_URI;
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Connection error:', err);
  }
}
connectDB();











// -------------- Schema definition section ---------------------------------------
// -------------- Schema definition section ---------------------------------------


// Admin schema -----------------------
const AdminSchema = new mongoose.Schema({
  UserName: { type: String, unique: true, required: true },
  Email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});
AdminSchema.plugin(uniqueValidator);
const Admin = mongoose.model('Admin', AdminSchema);






// Product Schema
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true }
});

const Product = mongoose.model('Product', ProductSchema);










// Login as an admin
app.post('/api/adminlogin', async (req, res) => {
  const { identifier, password } = req.body;

  try {
    const admin = await Admin.findOne({ $or: [{ UserName: identifier }, { Email: identifier }]});
    if (!admin) {
      res.status(400).send({ message: `There is no admin account with username or email: ${identifier}` });
    } 
    else {
      const isMatch = password === admin.password;
      if (isMatch) {
        // Generate JWT token
        const token = jwt.sign(
        { id: admin._id, UserName: admin.UserName },
        process.env.JWT_SECRET, 
        { expiresIn: '5h' }
      );
        res.status(200).send({ message: 'Success', token, username: admin.UserName });
      } else {
        res.status(400).send({ message: 'Invalid password!' });
      }

    }

  } 
  
  
  catch (err) {
    console.error('Error:', err);
    res.status(500).send({ message: 'Server error' });
  }


});










// ==================================================== ADMIN ACTIONS =======================================================
// ==================================================== ADMIN ACTIONS =======================================================
// ==================================================== ADMIN ACTIONS =======================================================
// ==================================================== ADMIN ACTIONS =======================================================


// Admin add to route
app.post('/api/adminadd', async (req, res) => {
  const products = req.body.items;

  try {
    // Validate if products array is empty
    if (!products || products.length === 0) {
      return res.status(400).json({ message: 'No products to add.' });
    }

    // Insert multiple products into the database
    await Product.insertMany(products);
    res.status(200).json({ message: 'Products added successfully' });
  } catch (err) {
    console.error('Error adding products:', err);
    res.status(500).json({ message: 'Server error' });
  }
});





// Admin display storage items
app.get('/api/admindisplay', async (req, res) => {
  try {
    const { category } = req.query;
    let products;
    
    if (category) {
      products = await Product.find({ category });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ message: 'Server error' });
  }
});



// Admin update route
app.put('/api/adminupdate/:id', async (req, res) => {
  const { id } = req.params;  // The ID of the item to update
  const updatedFields = req.body; // Only the fields that were provided will be updated

  try {
    // Validate that the item exists and update only the provided fields
    const product = await Product.findByIdAndUpdate(id, { $set: updatedFields }, { new: true });

    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ message: 'Server error' });
  }
});



// Admin delete route
app.delete('/api/admindelete', async (req, res) => {
  const { id } = req.body;
  try {
    // Attempt to find and delete the product by its ID
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    res.status(200).json({ message: 'Product deleted successfully', product });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ message: 'Server error' });
  }
});









// ========= FORM SUBMISSION ROUTE =================================================
app.post('/submit', async (req, res) => {

  const { Name, Email, Subject, Message } = req.body;
  const msg = {
    to: 'gakwandishops@gmail.com',
    from: 'remyshema20@gmail.com',
    subject: 'New Form Submission',
    html: `
      <p><strong>Name:</strong> ${Name}</p>
      <p><strong>User subject:</strong> ${Subject}</p>
      <p><strong>Email:</strong> ${Email}</p>
      <p><strong>Message:</strong> ${Message}</p>
    `
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Message has been sent successfully.' });
  }
  catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});


// ========= SUBSCRIPTION ROUTE =================================================
app.post('/subscribe', async (req, res) => {

  const { Email } = req.body;
  const msg = {
    to: 'gakwandishops@gmail.com',
    from: 'remyshema20@gmail.com',
    subject: 'Newsletter Subscription',
    html: `
      <p><strong>Email:</strong> ${Email}</p>
    `
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Message has been sent successfully.' });
  }
  catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

