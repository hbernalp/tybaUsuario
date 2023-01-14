const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginModel = ("../../models/loginModel.js");

const routerLogin = express.Router();

// login the user registry in DB
routerLogin.post('/login', (req, res) =>{
    let userLogin = (req.body)

    loginModel.findOne({ email: body.email }, (erro, usuarioDB)=>{
        if (erro) {
          return res.status(500).json({
             ok: false,
             err: erro
          })
       }

   // Verifica que exista un usuario con el mail escrita por el usuario.
      if (!usuarioDB) {
         return res.status(400).json({
           ok: false,
           err: {
               message: "The crfedencials is incorrects"
           }
        })
      }

   // Valida que la contraseña escrita por el usuario, sea la almacenada en la db
      if (! bcrypt.compareSync(body.password, usuarioDB.password)){
         return res.status(400).json({
            ok: false,
            err: {
              message: "Usuario o contraseña incorrectos"
            }
         });
      }
   // Genera el token de autenticación
       let token = jwt.sign({
              usuario: usuarioDB,
           }, process.env.SEED_AUTENTICACION, {
           expiresIn: process.env.CADUCIDAD_TOKEN
       })
       res.json({
           ok: true,
           usuario: usuarioDB,
           token,
       })
   })
})



module.exports = routerLogin;