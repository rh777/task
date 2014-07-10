/*global define */
define(function (require) {
    var Backbone = require('backbone'),
        ExerciseModel;

    //Data for exercise
    ExerciseModel = Backbone.Model.extend({
        defaults: {
            "name": "",
            "subexercises": []
        }
    });
    return ExerciseModel;
});