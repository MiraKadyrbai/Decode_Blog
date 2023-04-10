const exp = require('constants');
const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'))

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/login', (req, res)=>{
    res.render("login")
})

app.get('/register', (req, res)=>{
    res.render("register")
})

app.get('/profile', (req, res)=>{
    res.render("profile")
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
})