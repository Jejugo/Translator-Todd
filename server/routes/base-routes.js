const router = require("express").Router();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const fileUpload = require("express-fileupload");
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;


const email = 'goes.jeffjulian@gmail.com';
const clientId =
  '906134523802-mm4ttpnik1q0kasu7f1sfd7rvsaue9ij.apps.googleusercontent.com';
const clientSecret = 'xUA3i-CliWWydszk-S9gsLKu';
const refreshToken = '1/9fH_53K26iOUmMo-W9mkcfrx7_5vAZwgid9PYP-ej0WEHgoprDc08EzocAPxO--Z'

const oauth2Client = new OAuth2(
    clientId,
    clientSecret,
    "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: refreshToken
});

const accessToken = oauth2Client.getAccessToken();

router.use(fileUpload({
  createParentPath: true
}));

router.post('/register', async (req, res) => {
  const { body: {name, subject, text} } = req;
  console.log('RECEBIDO: ', req.files)

  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: email,
      clientId: clientId,
      clientSecret: clientSecret,
      refreshToken: refreshToken,
      accessToken: accessToken
    }
  });

  const mailOptions = {
    from: email,
    to: email,
    subject: 'Node.js Email with Secure OAuth',
    generateTextFromHTML: true,
    html: `<h1>Email by ${name}</h1>
    <br><h3>Subject: ${subject}</h3>
    <br><br><h5>${text}</h5>`
  };

  try {
    if(!req.files){
      res.send({
        status: false,
        message: 'No File Uploaded'
      })
    }
    else{
      const { files } = req;
      files.sampleFile.mv('./uploads/' + files.sampleFile.name)
      res.send({
        status: true,
        message: 'File is uploaded',
        data: {
            name: avatar.name,
            mimetype: avatar.mimetype,
            size: avatar.size
        }
      });
    }
    smtpTransport.sendMail(mailOptions, (error, response) => {
      if(error){
        res.sendStatus(500)
      }
      else{
        res.sendStatus(200)
      }
      smtpTransport.close();
    });
  }
  catch(err){
    res.sendStatus(500).send(err);
  }
});

module.exports = router;
