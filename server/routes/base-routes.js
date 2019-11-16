const router = require("express").Router();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const rimraf = require("rimraf");
var multer  = require('multer')

//importing google API to send emails
const {google} = require('googleapis');
//google authentication
const OAuth2 = google.auth.OAuth2;


//setting variables for the google API generated before
const email = 'goes.jeffjulian@gmail.com';
const clientId =
  '906134523802-mm4ttpnik1q0kasu7f1sfd7rvsaue9ij.apps.googleusercontent.com';
const clientSecret = 'xUA3i-CliWWydszk-S9gsLKu';
const refreshToken = '1/9fH_53K26iOUmMo-W9mkcfrx7_5vAZwgid9PYP-ej0WEHgoprDc08EzocAPxO--Z'

//instantiated google authentication API 
const oauth2Client = new OAuth2(
    clientId,
    clientSecret,
    "https://developers.google.com/oauthplayground" // Redirect URL
);
oauth2Client.setCredentials({
    refresh_token: refreshToken
});
const accessToken = oauth2Client.getAccessToken();


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//declared multer for uploadig files and using them to send Emails
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb){
    cb(null, file.originalname);
  }
});

let upload = multer({storage: storage});

router.post('/register', upload.single('sampleFile'), (req, res) => {
  const { body: {name, subject, text} } = req;

  //setting up information about the mail server that will be used.
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

  //email details
  const mailOptions = {
    from: email,
    to: email,
    subject: 'Node.js Email with Secure OAuth',
    attachments: [{
      filename: req.file.originalname,
      path: `${process.cwd()}/uploads/${req.file.originalname}`,
      contentType: 'application/pdf'
    }],
    generateTextFromHTML: true,
    html: `<h1>Email by ${name}</h1>
    <br><h3>Subject: ${subject}</h3>
    <br><br><h5>${text}</h5>`
  };

  //sending email
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if(error){
      console.log(`error ${error}`)
      res.sendStatus(500)
    }
    else{
      if (req.file) {
        //delete upload folder before sending the request back
        rimraf(`${process.cwd()}/uploads/${req.file.originalname}`, () => { 
          console.log("folder deleted"); 
          return res.send({
            status: 200,
            message: 'File is uploaded',
            data: {
                name: req.file.originalname,
                mimetype: req.file.mimetype,
                size: req.file.size
            }
          });
        });
      }
      else{
        res.sendStatus(200)
      }
    }
    smtpTransport.close();
  });
});

module.exports = router;
