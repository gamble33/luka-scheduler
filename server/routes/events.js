const router = require("express").Router();
let Event = require("../models/event.model");

router.route("/").get((req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
    const title = req.body.title;
    const owner = req.body.owner;
    const start = Date.parse(req.body.start);
    const end = Date.parse(req.body.end);
    const description = req.body.description;

    const newEvent = new Event({
        title,
        owner,
        start,
        end,
        description
    });

    newEvent.save()
        .then(() => res.json("Event Created!"))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
