module.exports = function (databaseBS, Sequelize) {
    var childrenReviewModel = require('../module/childReview').ChildReviewDetial(databaseBS, Sequelize, "reviews");
    var childrenReviewServiceObject = require('../service/childrenReviewService')(childrenReviewModel);

    var childrenReviewController = {};

    childrenReviewController.ChildrenReview = function (req, res, next) {
        console.log("hi review user");
        childrenReviewServiceObject.insertChildrenReview(req, childrenReviewModel, Sequelize, res);
    };



    return childrenReviewController;
}