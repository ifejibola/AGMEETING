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

router.get("/meetings/add/:meetingId/:userId", passport.authenticate("jwt", {session: false} ),async(req, res) =>{

    const user_id = req.params.userId;
    const meeting_id = req.params.meetingId;
    const meetingByUser = await userMeetingJunction.findOne({ where: { user_id: user_id, meeting_id: meeting_id}}).catch((err)=> {
        console.log("Error: ", err);
    });

    if(meetingByUser){
        return res.json({message: "You are already in this meeting."})
    }

    const newUserMeeting = new userMeetingJunction({meeting_id, user_id});
    console.log(newUserMeeting)
    const saved = await newUserMeeting.save().catch((err) => {
        console.log("Error: ", err);
        res.json({error: "Cannot join meeting at the moment."});
    });

    if(saved)
        res.json({message: "Successfully joined the meeting. Please go to Registered Meeting tab for meetings that you have joined."});

})

module.exports = router;