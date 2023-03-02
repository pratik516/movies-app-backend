const express = require("express");
const routes = require("./routes/index");
require("dotenv").config();

const app = express();
app.use(express.json());

// app.use(cors());
require("./connection/index");
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
