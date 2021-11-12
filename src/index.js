const express = require('express')

const app = express()

const myPlayers = []
myPlayers.push({"id": 1, "name": "Carlo", "surname": "Centofanti"})
myPlayers.push({"id": 2, "name": "Leonardo", "surname": "D'errico"})
myPlayers.push({"id": 3, "name": "Francesco", "surname": "Totti"})
myPlayers.push({"id": 4, "name": "Gianluigi", "surname": "Buffon"})
myPlayers.push({"id": 5, "name": "Roberto", "surname": "Baggio"})

app.use(express.json())

app.get("/", (req, res)=>{
    res.status(201).send("Ciao Mondo!!")
})

app.get("/players", (req, res)=>{
    res.status(200).json(myPlayers)
})

app.get("/players/:id", (req, res) =>{
    const player = myPlayers[req.params.id-1]
    res.json(player)
})

app.post("/players", (req, res) =>{
    console.log(req.body)
    myPlayers.push(req.body)
    res.status(200).send()
})

app.listen(3001)