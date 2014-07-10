/*global define */
define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        ExerciseListView;


    //Responsible for container of exercises
    ExerciseListView = Backbone.View.extend({
        tagName: 'div',
        template: _.template('<div class="exercises rounded"></div>'),
        className: 'wrapper',

        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
    return ExerciseListView;
});