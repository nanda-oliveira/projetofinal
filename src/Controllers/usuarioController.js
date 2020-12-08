const {request, response } = require("express");
const mongoose = require("mongoose");
const usuarioCollection = require("../models/usuarioSchema")

const getAllUsers = (req,res)=>{
    console.log(req.url)
    usuarioCollection.find((error, usuarios)=>{
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send({
                mensagem: "Get deu certo",
                usuarios
            })
        }
    })
}

const getByName = (req, res)=>{
    const nome = req.params.nome
    usuarioCollection.find(nome, (error, usuarios)=>{
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send(usuarios)
        }
    })
}

const addUser = (req,res) =>{
    const userBody = req.userBody
    const user = new usuarioCollection(userBody)

    user.save((error)=>{
        if(error){
            return res.status(400).send(error)
        }else{
            return res.status(200).send({
                mensagem : "Usuario criado com sucesso",
                user
            })
        }
    })
}

const deleteUser = (req, res) =>{
    const removerUser = req.params.id
    usuarioCollection.findByIdAndDelete(removerUser, (error,user)=>{
        if (error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send("Usuario apagado com sucesso")
        }
    })
}

const updateUser = (req, res) =>{
    const idParam = req.query.id
    const userBody = req.userBody
    const userAtualizado = {new:true}

    usuarioCollection.findByIdAndDelete(
        idParam,
        userBody,
        userAtualizado,
        (error,user)=>{
            if(Error){
                return res.status(500).send({
                    mensagem: "Falha",
                    error
                })
            }else{
                return res.status(200).send({
                    mensagem: "user atualizado com sucesso",
                    user
                })
            }
        }
    )
}



module.exports = {
    getAllUsers,
    getByName,
    addUser,
    deleteUser,
    updateUser
}
