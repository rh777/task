/**
 * Created by r.hilscher on 7/9/14.
 */
/*global define */
define(function (require) {

    var Backbone = require('backbone'),
        _ = require('underscore'),
        ExerciseView;

    //Responsible for showing indicator of exercise in navigation bar
    ExerciseView = Backbone.View.extend({

        tagName: 'div',
        template: _.template('<%= id %>'),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return ExerciseView;

});