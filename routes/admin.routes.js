const router = require("express").Router()
const adminController = require("./../controllers/admin.controller")

router
    //product
    .get("/products", adminController.adminGetAllProducts)
    .post("/add-product", adminController.adminAddProduct)
    .put("/update-product/:updateId", adminController.adminUpdateProduct)
    .delete("/delete-product/:deleteId", adminController.adminDeleteProduct)
    .put("/deactivate-product/:deactiveId", adminController.deactivateProduct)
    .put("/activate-product/:activeId", adminController.activateProduct)
    .get("/product-details/:productDetailId", adminController.getProductDetails)

    // order
    .get("/orders", adminController.getAllOrder)
    .get("/orders-details/:orderDetailId", adminController.getOrderDetails)
    .put("/cancel-order/:cancelOrderId", adminController.cancelOrder)
    .put("/update-order-status/:id", adminController.updateOrderStatus)

    //user
    .get("/users", adminController.getAllUsers)
    .get("/user-details/:userDetailsId", adminController.getUserDetails)
    .put("/block-user/:blockId", adminController.blockUsers)
    .put("/unblock-user/:unblockId", adminController.unBlockUsers)
    .get("/user-order/:userOrderId", adminController.getUserOrders)
    // .get("/all-users/", adminController.getAllUsers)

module.exports = router
