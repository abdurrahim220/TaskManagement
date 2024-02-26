const express = require("express");

const {signUp, login, logOut} = require("../controllers/auth.controller")

const router=express.Router();

router.post('/signup',signUp).post('/login',login).post('/logout',logOut)

module.exports = router;