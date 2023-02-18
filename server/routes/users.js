const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()
        .then(() => res.json("User Created!"))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/delete/:username").delete((req, res) => {
    const username = req.params.username;
    User.find({username}).deleteOne()
        .then(() => res.json(`User with username '${username}' was deleted successfully`))
        .catch(err => res.status(400).json(`Error: ${err}`));
})

module.exports = router;