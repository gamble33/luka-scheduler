const express = require("express");
const normalizePort = require("normalize-port");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();
const port = normalizePort(process.env.PORT || "3000");

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

const db_uri = process.env.ATLAS_URI;
mongoose.connect(db_uri, {
    useNewUrlParser: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// Routes
const testAPIRouter = require("./routes/testAPI");
const usersRouter = require("./routes/users");
const eventsRouter = require("./routes/events");

app.use("/api", testAPIRouter);
app.use("/users", usersRouter);
app.use("/events", eventsRouter);

app.listen(port, () => {console.log(`Server running on port ${port}`)});