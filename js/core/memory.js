/*global define, $, window */
define(function (require) {

    ///Responsible for memorizing user answers. uses localStorage
    var Memory = (function () {

        return {

            add: function (id, subexerciseId, task, answer) {
                var exercise = window.localStorage.getItem('exercise');

                if (exercise) {
                    exercise = JSON.parse(exercise);
                    exercise[id + "_" + subexerciseId + "_" + task] = answer;

                } else {
                    exercise = {};
                    exercise[id + "_" + subexerciseId + "_" +  task] = answer;
                }
                window.localStorage.setItem('exercise', JSON.stringify(exercise));
            },

            get: function (id, subexerciseId, task) {
                var exercise = window.localStorage.getItem('exercise');

                if (exercise) {
                    exercise = JSON.parse(exercise);
                    return exercise[id + "_" + subexerciseId + "_" +  task];
                }
                return "";
            },

            clearMemory: function () {
                window.localStorage.removeItem('exercise');
            }


        };
    }());
    return Memory;
});
