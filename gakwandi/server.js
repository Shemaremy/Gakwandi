require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

const sgMail = require('@sendgrid/mail');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


sgMail.setApiKey(process.env.SENDGRID_API_KEY);


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

