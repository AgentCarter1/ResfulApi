const express = require('express');
const cookieParser = require('cookie-parser');
const userRoutes = require("./app/routes/userRoutes.js")
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/",userRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Uygulama 3000 portunda çalışıyor.');
});
