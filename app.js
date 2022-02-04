const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const {white, bold, italic} = require('colorette');
const authRoutes = require('./routes/authRoute');
const app = express();

// Setup view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// SetUp Middleware Array
const middleware =[
    morgan('dev'),
    express.static('public'),
    express.urlencoded({extended: true}),
    express.json()
]
app.use(middleware);


app.use('/auth', authRoutes)
app.get("/", (req,res)=>{
    // res.render('pages/auth/signup', {title: 'Create a new account!'})
    res.json({
        "message": "Hello world"
    })
})
app.get("*",(req,res)=>{
    res.json({
        "message": "Page not Found"
    })
})

const port = process.env.PORT || 8080;
mongoose.connect(`mongodb+srv://kbutsho40034:Kbutsho1234@cluster0.snrkw.mongodb.net/stories?retryWrites=true&w=majority`,
 { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
      console.log("database connected");
    app.listen(port, () => {
      console.log(white(bold(italic("Server is running successfully on PORT " + port))));
    })
  })
  .catch(error = () => {
    console.log(error);
  });
