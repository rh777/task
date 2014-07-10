/*global define */
define(function (require) {

    var FooterView = require('views/footer/views/FooterView'),
        ExercisesCollection = require('collections/ExercisesCollection'),
        _ = require('underscore'),
        footer = {};

    //creates FooterView and gets data from server
    footer.run = function () {

        var exercisesCollection = new ExercisesCollection(),
            footerView = new FooterView();

        exercisesCollection.getData(function (data) {
            footerView.collection = data;
            footerView.render();
        });

        return footerView;
    };
    return footer;
});
