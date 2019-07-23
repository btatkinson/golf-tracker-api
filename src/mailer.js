import nodemailer from 'nodemailer';

const from = '"Golf-Tracker" <info@golf-tracker.com>'

function setup(){
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
}

export function sendConfirmationEmail(user){
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: "Welcome to Golf Tracker",
    text:
    `Welcome to Golf Tracker. Please confirm your email below.

    ${user.generateConfirmationUrl()}
    `
  }

  transport.sendMail(email);
}




// end
