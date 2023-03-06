const PORT = process.env.PORT ||  8000
const express = require('express')
// const axios = require('axios')
// const cheerio = require('cheerio')

const dinosx = [
    {
        "name": "Tyrannosaurus Rex",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 7000,
        "length": 12,
        "period": "Late Cretaceous"
    },
    {
        "name": "Stegosaurus",
        "type": "Herbivore",
        "diet": "Herbivore",
        "weight": 2000,
        "length": 9,
        "period": "Late Jurassic"
    },
    {
        "name": "Triceratops",
        "type": "Herbivore",
        "diet": "Herbivore",
        "weight": 13000,
        "length": 12,
        "period": "Late Cretaceous"
    },
    {
        "name": "Velociraptor",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 15,
        "length": 1,
        "period": "Late Cretaceous"
    },
    {
        "name": "Brachiosaurus",
        "type": "Herbivore",
        "diet": "Herbivore",
        "weight": 70000,
        "length": 30,
        "period": "Late Jurassic"
    },
    {
        "name": "Allosaurus",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 2000,
        "length": 20,
        "period": "Late Jurassic"
    },
    {
        "name": "Spinosaurus",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 20000,
        "length": 12,
        "period": "Late Cretaceous"
    },
    {
        "name": "Euoplocephalus",
        "type": "Herbivore",
        "diet": "Herbivore",
        "weight": 20000,
        "length": 20,
        "period": "Late Jurassic"
    },
    {
        "name": "Plateosaurus",
        "type": "Herbivore",
        "diet": "Herbivore",
        "weight": 7000,
        "length": 7,
        "period": "Late Cretaceous"
    },
    {
        "name": "Megalosaurus",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 14000,
        "length": 12,
        "period": "Late Jurassic"
    },
    {
        "name": "Giganotosaurus",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 46000,
        "length": 21,
        "period": "Late Cretaceous"
    },
    {
        "name": "Parasaurolophus",
        "type": "Herbivore",
        "diet": "Herbivore",
        "weight": 10000,
        "length": 12,

        "period": "Late Cretaceous"
    },
    {
        "name": "Microvenator",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 1,
        "length": 1,
        "period": "Late Cretaceous"
    },
    {
        "name": "Oviraptor",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 1,
        "length": 2,
        "period": "Late Cretaceous"
    },
    {
        "name": "Archaeopteryx",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 1,
        "length": 1,
        "period": "Late Jurassic"
    },
    {
        "name": "Ceratosaurus",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 9000,
        "length": 9,
        "period": "Late Cretaceous"
    },
    {
        "name": "Coelophysis",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 2,
        "length": 6,
        "period": "Late Jurassic"
    },
    {
        "name": "Compsognathus",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 0.12,
        "length": 1,
        "period": "Late Jurassic"
    },
    {
        "name": "Deinonychus",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 2,
        "length": 2,
        "period": "Late Cretaceous"
    },
    {
        "name": "Dilophosaurus",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 4,
        "length": 7,
        "period": "Late Jurassic"
    },
    {
        "name": "Diplodocus",
        "type": "Herbivore",
        "diet": "Herbivore",
        "weight": 40000,
        "length": 27,
        "period": "Late Jurassic"
    },
    {
        "name": "Gallimimus",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 5,
        "length": 6,
        "period": "Late Cretaceous"
    },
    {
        "name": "Mamenchisaurus",
        "type": "Herbivore",
        "diet": "Herbivore",
        "weight": 40000,
        "length": 21,
        "period": "Late Cretaceous"
    },
    {
        "name": "Megalosaurus",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 14000,
        "length": 12,
        "period": "Late Jurassic"
    },
    {
        "name": "Ornithomimus",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 4,
        "length": 2,
        "period": "Late Cretaceous"
    },
    {
        "name": "Oviraptor",
        "type": "Carnivore",
        "diet": "Carnivore",
        "weight": 1,
        "length": 2,
        "period": "Late Cretaceous"
    },
]


const app = express()
app.get('/',(req,res) => {
    res.json("welcome to Dino api!")

})

app.get('/dinos',(req,res) => {

    res.json(dinosx)
})


app.listen(PORT,() => console.log("Server is running on port " + PORT))