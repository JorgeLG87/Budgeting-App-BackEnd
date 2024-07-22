const express = require("express");
const data = require("../Models/data");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send(data);
})

app.get("/:id", (req, res) => {
    const { id } = req.params;
    const transaction = data.find(obj => obj.id === Number(id));

    if (transaction.id) {
        res.send(transaction);
    } else {
        res.status(404).json({error: "The ID doesn't exist"})
        // res.status(404).redirect("http://localhost:5173");
    }
})


app.post("/", (req, res) => {
    data.push(req.body);
    res.json(data[data.length-1]);
})


app.put("/:id", (req, res) => {
    const { id } = req.params;
    const indexToUpdate = data.findIndex(obj => obj.id === Number(id));
    data[indexToUpdate] = req.body;
    res.status(200).json(data[indexToUpdate]);
})


app.delete("/:id", (req, res) => {
    const { id } = req.params;
    const indexToDelete = data.findIndex(obj => obj.id === Number(id));
    data.splice(indexToDelete, 1);
    res.status(200).redirect("/");
})

module.exports = app