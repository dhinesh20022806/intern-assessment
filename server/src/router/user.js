const { Router } = require("express");
const {
  createHashPassword,
  camparePassword,
} = require("../utils/hashPassword");
const UserModel = require("../model/user");
const router = Router();

router.post("/api/login", async (req, res) => {
  const {
    body: { emailOrPhoneNo, password },
  } = req;
  console.log(req.body);
  let user;

  try {
    if (emailOrPhoneNo.includes("@")) {
      user = await UserModel.findOne({ email: emailOrPhoneNo });
    } else {
      user = await UserModel.findOne({ phoneNumber: emailOrPhoneNo });
    }
    if (!user) res.status(400).send({ msg: "invalid eamil" });

    const result = await camparePassword(password, user.password);

    clientUser = {
      fName: user.fName,
      lName: user.lName,
      email: user.email,
      phoneNumber: user.phoneNumber,
    };

    if (result) {
      res.status(200).send({ msg: clientUser });
      return;
    } else {
      res.status(400).send({ msg: "Bad Request" });
      return;
    }
  } catch (error) {
    console.log(error);
  }

  res.sendStatus(200);
});

router.post("/api/register", async (req, res) => {
  const {
    body: { fName, lName, phoneNumber, email, password, confirmPassword },
  } = req;
  console.log(req.body);
  if (password !== confirmPassword) {
    return res.status(400).send({ msg: "Bad Request" });
  }
  const hash = await createHashPassword(password);

  const newUser = new UserModel({
    fName,
    lName,
    email,
    phoneNumber,
    password: hash,
  });
  newUser.save();

  console.log(
    fName,
    lName,
    phoneNumber,
    email,
    password,
    confirmPassword,
    hash
  );

  res.sendStatus(201);
});

module.exports = router;
