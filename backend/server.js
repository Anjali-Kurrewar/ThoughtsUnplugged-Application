const express = require("express");
const port = 3000;
const connectMongoDB = require("./db/connectMongoDB");
const contactRoute = require('./router/contact-router');
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());
app.use("/api/form",contactRoute);

app.get('/',(req,res) =>{
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    connectMongoDB();
})