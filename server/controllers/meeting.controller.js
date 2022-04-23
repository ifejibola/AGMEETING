const express = require("express");
const router = express.Router();
const meeting = require("../models/meeting");
const userMeetingJunction = require("../models/usermeetingjunction")
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.get("/meetings", passport.authenticate("jwt", {session: false} ),async(req, res) =>{

    const allMeetings = await meeting.findAll().catch((err)=> {
        console.log("Error: ", err);
    });

    if(!allMeetings){
        return res.json({message: "You have no meeting right now."})
    };

    return res.json({ meetings: allMeetings});

})

// Get meetings by userId
router.get("/meetings/user/:userId", passport.authenticate("jwt", {session: false} ),async(req, res) =>{

    const meetingsByUser = await userMeetingJunction.findAll({ where: { user_id: req.params.userId }}).catch((err)=> {
        console.log("Error: ", err);
    });

    if(!meetingsByUser){
        return res.json({message: "You have no meeting right now."})
    };

    return res.json({ meetings: meetingsByUser});

})

module.exports = router;