const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// app.use(express.json());
 
app.use("/", require("./routes"));

const port = 8080;
 
app.listen(process.env.port || port);
console.log('Web Server is listening at port ' + (process.env.PORT || port));