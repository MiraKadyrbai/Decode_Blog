const express = require('express')
const router = express.Router();
const Genres = require('../Genres/Genres')
const User = require('../auth/User')
const Post = require("../Posts/Post");

router.get('/', async(req, res)=>{
    const allGenres = await Genres.find()
    res.render("index", {genres: allGenres})
})

router.get('/login', (req, res)=>{
    res.render("login")
})

router.get('/register', (req, res)=>{
    res.render("register")
})

router.get('/profile/:id', async(req, res)=>{
    const allGenres = await Genres.find()
    const user = await User.findById(req.params.id)
    const posts = await Post.find().populate('genre').populate("author")
    if(user){
        res.render("profile" , {user: user , genres: allGenres, loginUser: req.user ? req.user:{}, posts,})
    }else{
        res.redirect('/not-found')
    }
})

router.get('/admin/:id', async(req, res)=>{
    const alluser = await User.find()
    const allGenres = await Genres.find()
    const user = await User.findById(req.params.id)
    res.render("Admin", {alluser, genres : allGenres, loginUser: req.user ? req.user:{} , user: user})
})

router.get('/new', (req, res)=>{
    res.render("newblog")
})

router.get('/blog', (req, res)=>{
    res.render("blog")
})

router.get('/view', (req, res)=>{
    res.render("view")
})

router.get('/not-found', (req , res)=>{
    res.render("notFound")
})
module.exports = router