/*global define, $ */
define(function (require) {

    var Backbone = require('backbone'),
        _ = require('underscore'),
        memory = require('core/memory'),
        BasicInputView;

    //Base view for InputView
    BasicInputView = Backbone.View.extend({

        goodAnswer: null,
        events: {
            'keyup input': 'updateModelValue'
        },

        initialize: function (options) {
            this.model.on('change:value', this.updateInputValue, this);
            this.goodAnswer = this.model.get('answer');
        },

        //Updates input value in exercise from model
        updateInputValue: function () {
            this.$el.find('input').val(this.model.get('value'));
        },

        //Updates model value from inputs in exercise
        updateModelValue: function () {
            this.model.set('value', this.$el.find('input').val());
            memory.add(this.model.get('exercise_id'), this.model.get('subexercise_id'), this.model.get('id'), this.model.get('value'));
        },

        //Adds css class to input container when user answers good on question
        addGoodMessage: function () {
            this.$el.addClass('good-answer');
        },
        //Adds css class to input container when user answers bad on question
        addBadMessage: function () {
            this.$el.addClass('bad-answer');
        },

        //Deletes *-answer css class
        clearMessage: function () {
            this.$el.attr('class', this.className);
        },

        //Checks correctness of answer
        //Normally I would connect to server and get information about that user answers good
        //because smart user can see answers in code.
        checkAnswer: function () {

            if ($.trim(this.model.get('value').toLowerCase()) === $.trim(this.goodAnswer.toLowerCase())) {
                this.addGoodMessage();
                return true;
            }
            this.addBadMessage();
            return false;
        }

    });

    return BasicInputView;

});
