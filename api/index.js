const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

app.use("/api/auth", authRoute);

app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.get("/",(req,res) => {
  res.json({
    msg:"Hello world"
  })
})
app.listen(8800, () => {
  console.log("Hello docker")
  console.log("Backend server is running!");
});
