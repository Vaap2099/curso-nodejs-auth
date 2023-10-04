const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  secure: true,
  port: 465,
  auth: {
      user: 'vaap2099@gmail.com',
      pass: '<z>'
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'vaap2099@gmail.com', // sender address
    to: "vaap2099@yahoo.com", // list of receivers
    subject: "Prueba ✔", // Subject line
    text: "Esta es una prueba", // plain text body
    html: "<b>esta es una prueba?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

sendMail();
