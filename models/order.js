const { Schema, model } = require("mongoose");

const orderSchema = Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  ingredients: [
    {
      name: { type: String, required: true },
      amount: { type: Number, required: true },
    },
  ],
  customer: {
    name: String,
    address: String,
    phone: String,
    payment: String,
  },
  price: { type: Number, required: true },
  orderTime: {
    type: Date,
    default: Date.now(),
  },
});
const Order = model("Order", orderSchema);

module.exports = { Order };
