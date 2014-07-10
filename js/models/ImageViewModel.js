/*global define */
define(function (require) {
    var Backbone = require('backbone'),
        ImageViewModel;

    //Data for ImageView
    ImageViewModel = Backbone.Model.extend({
        defaults: {
            "exercise_id": "",
            "subexercise_id": "",
            "id": "",
            "src": "",
            "index": "",
            "value": "",
            "example": "",
            "angle": "0"
        }
    });
    return ImageViewModel;
});