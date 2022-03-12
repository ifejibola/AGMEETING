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

module.exports = router;
