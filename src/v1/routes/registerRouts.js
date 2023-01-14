const express = require("express");
const bcrypt = require('bcrypt');
const userSchema = require("../../models/registerModel");

const router = express.Router();

//this registry one user
router.post('/register', (req, res) => {
    let user = userSchema(req.body);
    // let {name, document, email, password} = user;
    
    user //promise
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});



module.exports = router;


