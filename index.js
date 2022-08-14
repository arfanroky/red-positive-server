require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;


//Middleware
app.use(cors())
app.use(express.json());

// mongoose.connect('', () => {

// })


app.get('/', (req, res) => {
    res.send('Hello from red positive server!')
})



app.listen(port, () => {
    console.log(`server listing the ${port} port`);
})





