const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get('/', function (req, res) {
  res.render("marvel");
});

app.get('/loader', function (req, res) {
    res.render("loader");
});

app.get('/drStrange', function (req, res) {
  res.render("drStrange");
});

// app.get('/profile/:username', function (req, res) {
//     res.send(`Hello from ${req.params.username}`);
// })

// app.get('/contact/:user', function (req, res) {
//     res.send(`Please contact ${req.params.user}`)
// })

app.listen(3000);