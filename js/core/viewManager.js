/*global define, $ */
define(function (require) {

    //Responsible for managing view (adding view to body, changing exercises)
    var ViewManager = (function () {
        var footerView,
            exerciseView,
            $promise;

        return {

            setFooter: function () {
                var footer = require('views/footer/footer');

                footerView = footer.run();
                footerView.on('startChangeExercise', function (currentExercise, direction) {
                    this.hideExercise(currentExercise, direction)
                }.bind(this));

                footerView.on('changeExercise', function (model) {
                    exerciseView.model.set(model.toJSON());
                    this.showExercise();
                }.bind(this));
                $('footer').append(footerView.$el);
            },

            showExercise: function() {
                if ($promise) {
                    $.when($promise).then(function () {
                        exerciseView.$el.fadeIn(footerView.animateDuration);
                    });
                }
            },

            hideExercise: function (currentExercise, direction) {
                if (currentExercise > 0 || direction < 0) {
                    $promise = $.Deferred(function (dfd) {
                        exerciseView.$el.fadeOut(footerView.animateDuration, dfd.resolve);
                    }).promise();
                }
            },

            setExerciseVew: function () {
                var exercise = require('views/exercise/exercise');
                exerciseView = exercise.run();
                $('.container').append(exerciseView.render().$el);
            },

            setViews: function () {
                this.setFooter();
                this.setExerciseVew();
            }
        };
    }());
    return ViewManager;
});
