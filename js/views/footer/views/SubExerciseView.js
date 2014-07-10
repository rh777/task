/*global define */
define(function (require) {

    var Backbone = require('backbone'),
        _ = require('underscore'),
        SubExerciseView;

    //Responsible for showing indicator of sub-exercises in navigation bar
    SubExerciseView = Backbone.View.extend({
        className: 'subexercise',
        template: _.template(''),

        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
    return SubExerciseView;
});