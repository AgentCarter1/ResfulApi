const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const userRouter = require("./app/routes/userRouter")
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/",userRouter);


app.listen(3000, () => {
  console.log('Uygulama 3000 portunda çalışıyor.');
});