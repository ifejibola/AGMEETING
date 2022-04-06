const express = require("express");
const router = express.Router();
const agenda = require("../models/agenda");


router.get("/agenda", async (req, res) => {
    try{
        var a = await agenda.findAll();
        if(!a){
            res.status(404);
        }
        res.json(a);
    }
    catch(err){
        console.log("Error! ", err)
    }
});

router.get("/agenda/:id", async (req, res) => {
    const id = req.params.id;

    try{
        var a = await agenda.findOne({where : {id: id}})
        if(!a){
            res.status(404);
        }
        res.json({agenda: a});
    }
    catch(err){
        console.log("Error! ", err)
    }
    res.status(404);
});


router.post("/agenda/submit", async (req, res) =>{
    try{
        let data = req.body;
        const a = await agenda.create({
            meeting_id: null,
            item_name: data['name'],
            description: data['description'],
            vote_for: data['vote_for'],
            vote_against: data['vote_against'],
            abstain: data['abstain']
        });
        res.status(200)
    }
    catch(err){
        console.log("Error! ", err);
        res.status(500)
    }
});

module.exports = router;
