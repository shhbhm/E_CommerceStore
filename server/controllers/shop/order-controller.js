const Order = require("../../models/Order");
const Cart = require("../../models/Cart");
const Product = require("../../models/Product");

const createOrder = async (req, res) => {
  try {
    const {
      userId,
      cartItems,
      addressInfo,
      totalAmount,
      cartId,
    } = req.body;

    // Create and save the order directly
    const newOrder = new Order({
      userId,
      cartId,
      cartItems,
      addressInfo,
      orderStatus: "confirmed",
      paymentMethod: "direct",
      paymentStatus: "paid",
      totalAmount,
      orderDate: new Date(),
      orderUpdateDate: new Date()
    });

    // Update product stock
    for (let item of cartItems) {
      let product = await Product.findById(item.productId);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Product not found: ${item.title}`
        });
      }

      if (product.totalStock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Not enough stock for product: ${product.title}`
        });
      }

      product.totalStock -= item.quantity;
      await product.save();
    }

    await newOrder.save();

    // Delete the cart after order is placed
    if (cartId) {
      await Cart.findByIdAndDelete(cartId);
    }

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      data: newOrder
    });

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occurred while creating order"
    });
  }
};

const getAllOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.query;

    const orders = await Order.find({ userId }).sort({ orderDate: -1 });

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching orders",
    });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const { orderId } = req.query;

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching order details",
    });
  }
};

module.exports = {
  createOrder,
  getAllOrdersByUser,
  getOrderDetails,
};
