/*global define */
define(function (require) {
    var Backbone = require('backbone'),
        InputViewModel;

    //Data for InputView
    InputViewModel = Backbone.Model.extend({
        defaults: {
            "exercise_id": "",
            "subexercise_id": "",
            "id": "",
            "value": "",
            "label": "",
            "example": "",
            "answer": ""
        }
    });
    return InputViewModel;
});