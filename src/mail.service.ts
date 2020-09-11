import * as nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: process!.env.MAIL_HOST!,
    port: 465,
    auth: {
        user: process!.env.MAIL_USER,
        pass: process!.env.MAIL_PASS
    },
    tls: {
      rejectUnauthorized:false
  }
});

type SendMailProps = {
  to: string;
  message: string;
}

export const sendMail = ({to, message}:SendMailProps) => {
  console.log({to, message});

  let messageToSubmit = {
  from: 'No Pain faculty <contact@bogdanbledea.ro>',
  to: `Recipient <${to}>`,
  subject: 'No Pain Faculty - Register succesfully',
  text: `${message}`,
  html: `${message}`
};

transporter.sendMail(messageToSubmit, (err, info:any):any => {
  if (err) {
      console.log('Error occurred. ' + err.message);
      return process.exit(1);
  }

  console.log('Message sent: %s', info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});
}