const { Order } = require("../models/order");
const { of } = require("await-of");

const create = async function (req, res) {
  const newOrder = new Order(req.body);
  newOrder.userId = req.user._id;
  const [saveOrder, saveOrderError] = await of(newOrder.save());

  if (saveOrderError)
    return res
      .status(400)
      .send({ error: true, message: saveOrderError.message });

  res.send(saveOrder);
};

const list = async function (req, res) {
  const orders = await Order.find();
  res.send(orders);
};
const item = async function (req, res) {
  const id = req.params.id;
  const order = await Order.findById(id);
  res.send(order);
};
module.exports = { create, list, item };
