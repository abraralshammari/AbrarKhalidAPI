const express = require("express");
const cors = require("cors");
const path = require("path");

//import route
const studentRoutes = require("./API/student/route");
const courseRoute = require("./API/course/route");
const universityRoute = require("./API/university/route");

//db
const db = require("./db/models");

//initialize app
const app = express();

//middleware
app.use(express.json());
app.use(cors());
//media
app.use("/media", express.static(path.join(__dirname, "media")));

//router
app.use("/students", studentRoutes);
app.use ("/courses", courseRoute);
app.use("/universities" , universityRoute);



app.get("/test", (_, res) => {
  res.json("Its working");
});

const run = async () => {
  try {
    await db.sequelize.sync();
    console.log("Connection to the database was successful!");
    await app.listen(8000, () => {
      console.log("Server is runinng good");
    });
  } catch (error) {
    console.log("Error connecting to the db", error);
  }
};
run();
