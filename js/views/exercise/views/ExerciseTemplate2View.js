/*global define */
define(function (require) {

    var BasicExerciseTemplateView = require('views/exercise/views/BasicExerciseTemplateView'),
        ImageViewModel = require('models/ImageViewModel'),
        InputViewModel = require('models/ImageViewModel'),
        RotatedImageView = require('views/exercise/views/RotatedImageView'),
        InputView = require('views/exercise/views/InputView'),
        _ = require('underscore'),
        memory = require('core/memory'),
        ExerciseView;


    //Responsible for showing special kind of Exercise with template 'exercise_2'
    ExerciseView = BasicExerciseTemplateView.extend({

        tagName: 'div',
        template: _.template('<h1><%=parent.name%></h1>' +
                             '<h2><%=name%></h2>' +
                             '<div class="task-container example2-container"></div>' +
                             '<div class="inputs-container"></div>'
            ),
        subviews: [],

        //Adds image to exercise
        addImages: function () {

            _.each(this.model.get('images'), function (el, index) {
                var view = new RotatedImageView({
                    model: new ImageViewModel({
                        angle: this.model.get('angles')[index],
                        src: el,
                        index: index + 1,
                        example: this.model.get('example')[index],
                        answer: this.model.get('answers')[index],

                    })
                });
                this.$el.find('.task-container').append(view.render().$el);
            }.bind(this));
        },

        //Adds labels with inputs to exercise
        addLabels: function () {
            _.each(this.model.get('labels'), function (el, index) {
                var view = new InputView({
                    model: new InputViewModel({
                        answer: this.model.get('answers')[index],
                        label: el,
                        example: this.model.get('example')[index],
                        exercise_id: this.model.get('parent').id,
                        subexercise_id: this.model.get('id'),
                        id: index,
                        value: memory.get(this.model.get('parent').id, this.model.get('id'), index)
                    })
                });
                this.$el.find('.inputs-container').append(view.render().$el);
                this.subviews.push(view);
            }.bind(this));
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.addImages();
            this.addLabels();

            return this;
        }
    });

    return ExerciseView;

});
