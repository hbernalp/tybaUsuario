const express = require("express");
const userSchema = require("../../models/registerModel");

const router = express.Router();

//this registry one user
router.post('/users', (req, res) => {
    const user = userSchema(req.body)
    user //promise
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});



module.exports = router;