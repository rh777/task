/*global define */
define(function (require) {
    var Backbone = require('backbone'),
        Exercise = require('models/ExerciseModel'),
        ExercisesCollection;


    /*
    * I had to work locally without server
    * So I added data directly in Collection
    * Because I can't get json data from file in file:// (cross-domain policy)
    * My structure of data is in data property
    * Navigation bar should generate basis on this data.
    * I didn't do checking correctness of data
    */
    ExercisesCollection = Backbone.Collection.extend({
        model: Exercise,
        data: [
            {
                "id": 1,
                "name": "Exercise 1 Vocabulary",
                "subexercises": [
                    {
                        "id": 1,
                        "name": "Label the weather symbols.",
                        "type": "fill-in",
                        "images": [
                            'img/pictures/exercise2/1.png',
                            'img/pictures/exercise2/2.png',
                            'img/pictures/exercise2/3.png',
                            'img/pictures/exercise2/4.png',
                            'img/pictures/exercise2/5.png',
                            'img/pictures/exercise2/6.png'
                        ],
                        "example": {
                            "0": "foggy"
                        },
                        "answers": {
                            "1": "raining",
                            "2": "sunny",
                            "3": "cloudy",
                            "4": "windy",
                            "5": "snowing"
                        },
                        "labels": [
                            'snowing', 'cloudy', 'raining', 'foggy', 'windy', 'sunny'
                        ],
                        "template": "exercise_1"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Exercise 2 Vocabulary",
                "subexercises": [
                    {
                        "id": 1,
                        "name": "What school activities do you see on the picture?",
                        "type": "fill-in",
                        "images": [
                            'img/pictures/exercise1/1.png',
                            'img/pictures/exercise1/2.png',
                            'img/pictures/exercise1/3.png',
                            'img/pictures/exercise1/4.png',
                            'img/pictures/exercise1/5.png',
                            'img/pictures/exercise1/6.png'
                        ],
                        "angles": [-5, 5, 8, -10, 6, 10],
                        "answers": {
                            "1": "3",
                            "2": "4",
                            "3": "1",
                            "4": "5",
                            "5": "6"
                        },
                        example: {
                            0: '2'
                        },
                        "labels": [
                            'enjoying a field trip',
                            'working on computers',
                            'taking a test',
                            'doing a project',
                            'giving a presentation',
                            'practicing yoga'
                        ],
                        "template": "exercise_2"
                    }
                ]
            },
            {
                "id": 3,
                "name": "Exercise 3 Vocabulary",
                "subexercises": [
                    {
                        "id": 1,
                        "name": "Label the weather symbols.",
                        "type": "fill-in",
                        "images": [
                            'img/pictures/exercise2/1.png',
                            'img/pictures/exercise2/2.png',
                            'img/pictures/exercise2/3.png',
                            'img/pictures/exercise2/4.png',
                            'img/pictures/exercise2/5.png',
                            'img/pictures/exercise2/6.png'
                        ],
                        "example": {
                            "0": "foggy"
                        },
                        "answers": {
                            "1": "raining",
                            "2": "sunny",
                            "3": "cloudy",
                            "4": "windy",
                            "5": "snowing"
                        },
                        "labels": [
                            'snowing', 'cloudy', 'raining', 'foggy', 'windy', 'sunny'
                        ],
                        "template": "exercise_1"
                    },
                    {
                        "id": 2,
                        "name": "What school activities do you see on the picture?",
                        "type": "fill-in",
                        "images": [
                            'img/pictures/exercise1/1.png',
                            'img/pictures/exercise1/2.png',
                            'img/pictures/exercise1/3.png',
                            'img/pictures/exercise1/4.png',
                            'img/pictures/exercise1/5.png',
                            'img/pictures/exercise1/6.png'
                        ],
                        "angles": [-5, 5, 8, -10, 6, 10],
                        "answers": {
                            "1": "3",
                            "2": "4",
                            "3": "1",
                            "4": "5",
                            "5": "6"
                        },
                        example: {
                            0: '2'
                        },
                        "labels": [
                            'enjoying a field trip',
                            'working on computers',
                            'taking a test',
                            'doing a project',
                            'giving a presentation',
                            'practicing yoga'
                        ],
                        "template": "exercise_2"
                    },
                    {
                        "id": 3,
                        "name": "What school activities do you see on the picture?",
                        "type": "fill-in",
                        "images": [
                            'img/pictures/exercise1/1.png',
                            'img/pictures/exercise1/2.png',
                            'img/pictures/exercise1/3.png',
                            'img/pictures/exercise1/4.png',
                            'img/pictures/exercise1/5.png',
                            'img/pictures/exercise1/6.png'
                        ],
                        "angles": [-5, 5, 8, -10, 6, 10],
                        "answers": {
                            "1": "3",
                            "2": "4",
                            "3": "1",
                            "4": "5",
                            "5": "6"
                        },
                        example: {
                            0: '2'
                        },
                        "labels": [
                            'enjoying a field trip',
                            'working on computers',
                            'taking a test',
                            'doing a project',
                            'giving a presentation',
                            'practicing yoga'
                        ],
                        "template": "exercise_2"
                    },
                    {
                        "id": 4,
                        "name": "What school activities do you see on the picture?",
                        "type": "fill-in",
                        "images": [
                            'img/pictures/exercise1/1.png',
                            'img/pictures/exercise1/2.png',
                            'img/pictures/exercise1/3.png',
                            'img/pictures/exercise1/4.png',
                            'img/pictures/exercise1/5.png',
                            'img/pictures/exercise1/6.png'
                        ],
                        "angles": [-5, 5, 8, -10, 6, 10],
                        "answers": {
                            "1": "3",
                            "2": "4",
                            "3": "1",
                            "4": "5",
                            "5": "6"
                        },
                        example: {
                            0: '2'
                        },
                        "labels": [
                            'enjoying a field trip',
                            'working on computers',
                            'taking a test',
                            'doing a project',
                            'giving a presentation',
                            'practicing yoga'
                        ],
                        "template": "exercise_2"
                    }
                ]
            },
            {
                "id": 4,
                "name": "Exercise 4 Vocabulary",
                "subexercises": [
                    {
                        "id": 1,
                        "name": "What school activities do you see on the picture?",
                        "type": "fill-in",
                        "images": [
                            'img/pictures/exercise1/1.png',
                            'img/pictures/exercise1/2.png',
                            'img/pictures/exercise1/3.png',
                            'img/pictures/exercise1/4.png',
                            'img/pictures/exercise1/5.png',
                            'img/pictures/exercise1/6.png'
                        ],
                        "angles": [-5, 5, 8, -10, 6, 10],
                        "answers": {
                            "1": "3",
                            "2": "4",
                            "3": "1",
                            "4": "5",
                            "5": "6"
                        },
                        example: {
                            0: '2'
                        },
                        "labels": [
                            'enjoying a field trip',
                            'working on computers',
                            'taking a test',
                            'doing a project',
                            'giving a presentation',
                            'practicing yoga'
                        ],
                        "template": "exercise_2"
                    },
                    {
                        "id": 2,
                        "name": "What school activities do you see on the picture?",
                        "type": "fill-in",
                        "images": [
                            'img/pictures/exercise1/1.png',
                            'img/pictures/exercise1/2.png',
                            'img/pictures/exercise1/3.png',
                            'img/pictures/exercise1/4.png',
                            'img/pictures/exercise1/5.png',
                            'img/pictures/exercise1/6.png'
                        ],
                        "angles": [-5, 5, 8, -10, 6, 10],
                        "answers": {
                            "1": "3",
                            "2": "4",
                            "3": "1",
                            "4": "5",
                            "5": "6"
                        },
                        example: {
                            0: '2'
                        },
                        "labels": [
                            'enjoying a field trip',
                            'working on computers',
                            'taking a test',
                            'doing a project',
                            'giving a presentation',
                            'practicing yoga'
                        ],
                        "template": "exercise_2"
                    },
                    {
                        "id": 3,
                        "name": "What school activities do you see on the picture?",
                        "type": "fill-in",
                        "images": [
                            'img/pictures/exercise1/1.png',
                            'img/pictures/exercise1/2.png',
                            'img/pictures/exercise1/3.png',
                            'img/pictures/exercise1/4.png',
                            'img/pictures/exercise1/5.png',
                            'img/pictures/exercise1/6.png'
                        ],
                        "angles": [-5, 5, 8, -10, 6, 10],
                        "answers": {
                            "1": "3",
                            "2": "4",
                            "3": "1",
                            "4": "5",
                            "5": "6"
                        },
                        example: {
                            0: '2'
                        },
                        "labels": [
                            'enjoying a field trip',
                            'working on computers',
                            'taking a test',
                            'doing a project',
                            'giving a presentation',
                            'practicing yoga'
                        ],
                        "template": "exercise_2"
                    },
                    {
                        "id": 4,
                        "name": "What school activities do you see on the picture?",
                        "type": "fill-in",
                        "images": [
                            'img/pictures/exercise1/1.png',
                            'img/pictures/exercise1/2.png',
                            'img/pictures/exercise1/3.png',
                            'img/pictures/exercise1/4.png',
                            'img/pictures/exercise1/5.png',
                            'img/pictures/exercise1/6.png'
                        ],
                        "angles": [-5, 5, 8, -10, 6, 10],
                        "answers": {
                            "1": "3",
                            "2": "4",
                            "3": "1",
                            "4": "5",
                            "5": "6"
                        },
                        example: {
                            0: '2'
                        },
                        "labels": [
                            'enjoying a field trip',
                            'working on computers',
                            'taking a test',
                            'doing a project',
                            'giving a presentation',
                            'practicing yoga'
                        ],
                        "template": "exercise_2"
                    }
                ]
            },
            {
                "id": 5,
                "name": "Exercise 5 Vocabulary",
                "subexercises": [
                    {
                        "id": 1,
                        "name": "What school activities do you see on the picture?",
                        "type": "fill-in",
                        "images": [
                            'img/pictures/exercise1/1.png',
                            'img/pictures/exercise1/2.png',
                            'img/pictures/exercise1/3.png',
                            'img/pictures/exercise1/4.png',
                            'img/pictures/exercise1/5.png',
                            'img/pictures/exercise1/6.png'
                        ],
                        "angles": [-5, 5, 8, -10, 6, 10],
                        "answers": {
                            "1": "3",
                            "2": "4",
                            "3": "1",
                            "4": "5",
                            "5": "6"
                        },
                        example: {
                            0: '2'
                        },
                        "labels": [
                            'enjoying a field trip',
                            'working on computers',
                            'taking a test',
                            'doing a project',
                            'giving a presentation',
                            'practicing yoga'
                        ],
                        "template": "exercise_2"
                    },
                    {
                        "id": 2,
                        "name": "What school activities do you see on the picture?",
                        "type": "fill-in",
                        "images": [
                            'img/pictures/exercise1/1.png',
                            'img/pictures/exercise1/2.png',
                            'img/pictures/exercise1/3.png',
                            'img/pictures/exercise1/4.png',
                            'img/pictures/exercise1/5.png',
                            'img/pictures/exercise1/6.png'
                        ],
                        "angles": [-5, 5, 8, -10, 6, 10],
                        "answers": {
                            "1": "3",
                            "2": "4",
                            "3": "1",
                            "4": "5",
                            "5": "6"
                        },
                        example: {
                            0: '2'
                        },
                        "labels": [
                            'enjoying a field trip',
                            'working on computers',
                            'taking a test',
                            'doing a project',
                            'giving a presentation',
                            'practicing yoga'
                        ],
                        "template": "exercise_2"
                    },
                    {
                        "id": 3,
                        "name": "What school activities do you see on the picture?",
                        "type": "fill-in",
                        "images": [
                            'img/pictures/exercise1/1.png',
                            'img/pictures/exercise1/2.png',
                            'img/pictures/exercise1/3.png',
                            'img/pictures/exercise1/4.png',
                            'img/pictures/exercise1/5.png',
                            'img/pictures/exercise1/6.png'
                        ],
                        "angles": [-5, 5, 8, -10, 6, 10],
                        "answers": {
                            "1": "3",
                            "2": "4",
                            "3": "1",
                            "4": "5",
                            "5": "6"
                        },
                        example: {
                            0: '2'
                        },
                        "labels": [
                            'enjoying a field trip',
                            'working on computers',
                            'taking a test',
                            'doing a project',
                            'giving a presentation',
                            'practicing yoga'
                        ],
                        "template": "exercise_2"
                    },
                    {
                        "id": 4,
                        "name": "What school activities do you see on the picture?",
                        "type": "fill-in",
                        "images": [
                            'img/pictures/exercise1/1.png',
                            'img/pictures/exercise1/2.png',
                            'img/pictures/exercise1/3.png',
                            'img/pictures/exercise1/4.png',
                            'img/pictures/exercise1/5.png',
                            'img/pictures/exercise1/6.png'
                        ],
                        "angles": [-5, 5, 8, -10, 6, 10],
                        "answers": {
                            "1": "3",
                            "2": "4",
                            "3": "1",
                            "4": "5",
                            "5": "6"
                        },
                        example: {
                            0: '2'
                        },
                        "labels": [
                            'enjoying a field trip',
                            'working on computers',
                            'taking a test',
                            'doing a project',
                            'giving a presentation',
                            'practicing yoga'
                        ],
                        "template": "exercise_2"
                    }
                ]
            }
        ],

        getData: function (callback) {

            if (typeof callback === 'function') {
                callback.call(this, this.data);
            }
        }

    });

    ExercisesCollection.prototype.sync = function () { return null; };
    ExercisesCollection.prototype.fetch = function () { return null; };
    ExercisesCollection.prototype.save = function () { return null; };

    return ExercisesCollection;
});