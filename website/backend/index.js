require('dotenv').config();
const express = require('express')
const app = express()
const port = 8080
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const policy = require('cors')
app.use(policy())

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER , // Owner's email
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
    res.status(500).send('Failed to send message');
      console.log(error);
      
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Message sent successfully');
    }
  });
});

app.listen(port , ()=> console.log(`Example app listening on port ${port}!`))
