var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'amritacbelectiveteam@gmail.com',
    pass: 'amritacb1234'
  }
});

var mailOptions = {
  from: 'amritacbelectiveteam@gmail.com',
  to: 'parvana2902@gmail.com',
  subject: 'Availability of 7th sem elective application form',
  html: '<p>Dear students,</p><p>This is to notify you that the forms for elective application for the 7th semester will be available starting <b>17th May 2021</b> till <b>28th May 2021</b> on your AUEMS website.Submit your response at the earliest</p><br> <p><i>regards, <br>AUEMS Team</i></p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 