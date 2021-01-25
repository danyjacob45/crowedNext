/**
 * @typedef { import("next-routes").Registry } Registry}
 */
const routes = require("next-routes");

// Name   Page      Pattern
// module.exports = routes() // ----   ----      -----
// .add({ name: "beta", pattern: "/v3", page: "v3" }); // beta   v3        /v3

/**
 * @type {Registry}
 */
module.exports = routes()
  .add({
    name: "orders.show",
    pattern: "/orders/[id]",
    // page: "../../orders/[id]",
  })
  .add({
    name: "products.all",
    pattern: "/products/all",
    // page: "/products/all",
  })
  .add({
    name: "products.waiting",
    pattern: "/products/waiting",
    // page: "/products/waiting",
  })
  .add({
    name: "products.canceled",
    pattern: "/products/canceled",
    // page: "/products/canceled",
  }); // beta   v3        /v3
