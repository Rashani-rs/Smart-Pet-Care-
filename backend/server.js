const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const host = "127.0.0.1";
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const url =
  "mongodb+srv://uthpalarashani:uthpalasmartpet@cluster0.ls29bew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Connected to MongoDB");
  }
};
connect();

const server = app.listen(port, host, () => {
  console.log(`Node server is listening to ${server.address().port}`);
});
