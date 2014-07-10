/*global define */
define(function (require) {

    var Backbone = require('backbone'),
        _ = require('underscore'),
        memory = require('core/memory'),
        BasicExerciseTemplateView;

    //Base object for templates
    //Adds listener  for clearAnswers and checkAnswers events
    BasicExerciseTemplateView = Backbone.View.extend({

        initialize: function (options) {

            this.on('clearAnswers', function () {
                _.each(this.subviews, function (el, index) {
                    el.model.set('value', "");
                    memory.add(el.model.get('exercise_id'), el.model.get('subexercise_id'), el.model.get('id'), el.model.get('value'));
                    el.clearMessage();
                });
            }, this);

            this.on('checkAnswers', function () {
                _.each(this.subviews, function (el) {
                    if (!el.model.get('example')) {
                        el.checkAnswer();
                    }
                });
            }, this);
        }
    });

    return BasicExerciseTemplateView;

});
