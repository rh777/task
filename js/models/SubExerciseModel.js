/*global define */
define(function (require) {
    var Backbone = require('backbone'),
        SubExerciseModel;

    //Data for exercise
    SubExerciseModel = Backbone.Model.extend({
        defaults: {
            "id": "",
            "name": "",
            "type": "",
            "images": [],
            "labels": [],
            "template": "",
            "parent": {}
        }
    });

    return SubExerciseModel;
});