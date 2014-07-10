
define(function(require) {

    var ExerciseView = require('views/exercise/views/ExerciseView'),
        SubexerciseModel = require('models/SubExerciseModel'),
        _ = require('underscore'),
        exercise = {};

    //creates exerciseView
    exercise.run = function () {
        var subexerciseModel = new SubexerciseModel(),
            exerciseView = new ExerciseView({model: subexerciseModel});

        return exerciseView;
    };
    return exercise;
});
