const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/user");
const cors = require("cors");
mongoose.connect(
  "mongodb+srv://dhinesh20022806:dxRB4CLAKXUIe73z@cluster0.fo6vt.mongodb.net/userDB"
);

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRouter);
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
