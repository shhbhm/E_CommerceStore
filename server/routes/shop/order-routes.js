const express = require("express");

const {
  createOrder,
  getAllOrdersByUser,
  getOrderDetails,
} = require("../../controllers/shop/order-controller");

const router = express.Router();

router.post("/create", createOrder);
router.get("/user-orders", getAllOrdersByUser);
router.get("/details", getOrderDetails);

module.exports = router;
