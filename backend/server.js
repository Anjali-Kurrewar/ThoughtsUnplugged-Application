const express = require("express");
const connectMongoDB = require("./db/connectMongoDB");
const contactRoute = require('./router/contact-router');
const dotenv = require("dotenv");
const cors = require('cors');
const path = require('path');

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
//const __dirname = path.resolve();

app.use(cors());
app.use("/api/form",contactRoute)

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
    connectMongoDB();
})