module.exports = function (router) {
    var productController = require('../controllers/product.controller');

    router.get("/product/list", productController.get_list);
}