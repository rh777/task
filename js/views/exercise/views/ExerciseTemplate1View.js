/*global define */
define(function(require) {

    var BasicExerciseTemplateView = require('views/exercise/views/BasicExerciseTemplateView'),
        ImageViewModel = require('models/ImageViewModel'),
        ImageView = require('views/exercise/views/ImageView'),
        _ = require('underscore'),
        memory = require('core/memory'),
        ExerciseView;

    //Responsible for showing special kind of Exercise with template 'exercise_1'
    ExerciseView = BasicExerciseTemplateView.extend({

        tagName: 'div',
        subviews: [],
        template: _.template('<h1><%=parent.name%></h1>' +
                             '<h2><%=name%></h2>' +
                             '<div class="task-container"></div>' +
                             '<div class="labels"></div>'),

        //Adds images to exercise
        addImages: function () {

            _.each(this.model.get('images'), function (el, index) {
                this.subviews.push(new ImageView({
                    model: new ImageViewModel({
                        src: el,
                        index: index + 1,
                        example: this.model.get('example')[index],
                        answer: this.model.get('answers')[index],
                        exercise_id: this.model.get('parent').id,
                        subexercise_id: this.model.get('id'),
                        id: index,
                        value: memory.get(this.model.get('parent').id, this.model.get('id'), index)
                    })
                }));
                this.$el.find('.task-container').append(this.subviews[this.subviews.length - 1].render().$el);
            }.bind(this));
        },

        //Adds label to exercise
        addLabels: function () {
            _.each(this.model.get('labels'), function (el, index) {
                this.$el.find('.labels').append('<span>' + el + '</span>');
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
