"use strict";
import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(to,subject,html) {
  
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
  service:'gmail',
    auth: {
      user: process.env.Email, // generated ethereal user
      pass: process.env.Email_password, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `attar" <${process.env.Email}>`, // sender address
    to,  // list of receivers
    subject,  // Subject line
    
    html, // html body
  })
}