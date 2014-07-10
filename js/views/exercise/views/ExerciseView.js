/*global define, $ */
define(function (require) {

    var Backbone = require('backbone'),
        _ = require('underscore'),
        ExerciseView;

    //Responsible form showing ExerciseView
    ExerciseView = Backbone.View.extend({

        tagName: 'div',
        className: 'exercise-container',
        template: _.template('<form><input type="submit" class="check-answers-button rounded" value="" /></form>'),
        navType: null,

        events: {
            'submit form': 'onSubmit'
        },
        exercise: null,

        onSubmit: function (e) {
            e.preventDefault();

            var $btn = $('.check-answers-button');

            if ($btn.hasClass('refresh')) {
                this.exercise.trigger('clearAnswers');
                $btn.removeClass('refresh');
            } else {
                this.exercise.trigger('checkAnswers');
                $btn.addClass('refresh');
            }

            return false;
        },

        initialize: function (options) {
            this.model.on('change', this.render, this);
        },

        render: function () {
            var Exercise;

            this.$el.html(this.template());

            switch (this.model.get('template')) {
            case 'exercise_1':
                Exercise = require('views/exercise/views/ExerciseTemplate1View');
                break;
            case 'exercise_2':
                Exercise = require('views/exercise/views/ExerciseTemplate2View');
                break;
            }
            if (Exercise) {
                this.exercise = new Exercise({model: this.model});
                this.$el.find('form').append(this.exercise.render().$el);
            }
            return this;
        }
    });

    return ExerciseView;

});
