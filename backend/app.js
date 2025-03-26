// app.js
// Inside app.js
const express = require("express");
const Razorpay = require("razorpay");

// This razorpayInstance will be used to
// access any resource from razorpay
const razorpayInstance = new Razorpay({
  // Replace with your key_id
  key_id: "rzp_test_P8006ndgF5O1WL",

  // Replace with your key_secret
  key_secret: "ENUio6wvKB3fNQ0IfOHj08Xz",
});

const app = express();
app.use(express.json());
const PORT = 3000;

// Here we will create two routes one
// /createOrder and other /verifyOrder

// /createOrder
app.post("/createOrder", (req, res) => {
  // STEP 1:
  const { amount, currency, receipt, notes } = req.body;

  // STEP 2:
  razorpayInstance.orders.create(
    { amount, currency, receipt, notes },
    (err, order) => {
      //STEP 3 & 4:
      if (!err) res.json(order);
      else res.send(err);
    }
  );
});

app.get("/", (req, res) => {
  res.send("hi");
});
// Replace these comments with the code
// provided later in step 2 & 8 for routes

app.listen(PORT, () => {
  console.log("Server is Listening on Port " + PORT);
});
