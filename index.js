require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const userInfo = require('./routes/userInfo');


//Middleware
app.use(cors())
app.use(express.json());

// database connection
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connection Successfully'))
  .catch((err) => console.log(err));



// Routes
app.use('/userInfo', userInfo)


app.get('/', (req, res) => {
    res.send('Hello from red positive server!')
})



app.listen(port, () => {
    console.log(`server listing the ${port} port`);
})





