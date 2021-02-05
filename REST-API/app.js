const  express = require('express')



const app = express();
const mongoose = require('mongoose');
 bodyParser = require('body-parser');
//require('constdotenv/config');            // require dotenv packages

app.use(bodyParser.json());     //  use the middleware for  take bodyparser


// Import Routes

const PostsRoute = require('./routes/posts');

app.use('/posts',PostsRoute);        // use for middleware  i.e always go on posts


// // Middleware

// app.use('/posts',() =>{
//     console.log('This is Middleware')
// })



// Routes

// app.get('/', (req,res)=> {

//     res.send('We are on Home');

// })


// app.get('/posts',(req,res)=>{
//     res.send('We are on posts')
// });


// Connect to DB

mongoose.connect('mongodb+srv://ujjwal:Warrior@2658@cluster0.vd6ik.mongodb.net/REST-API?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true},()=>{
    console.log('DB Connected');
});
app.listen(3000);
