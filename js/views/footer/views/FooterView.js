/*global define, $ */
define(function (require) {

    var Backbone = require('backbone'),
        NavView = require('views/footer/views/NavView'),
        ExerciseView = require('views/footer/views/ExerciseView'),
        SubExerciseView = require('views/footer/views/SubExerciseView'),
        ExerciseListView = require('views/footer/views/ExerciseListView'),
        ExerciseModel = require('models/ExerciseModel'),
        SubExerciseModel  = require('models/SubExerciseModel'),
        _ = require('underscore'),
        Footer;


    //Responsible for navigation bar
    Footer = Backbone.View.extend({
        tagName: 'div',
        template: _.template('<div class="pointer"></div><hr class="line" /><hr class="line-active" /><div class="nav-button-container"></div>'),
        exercises: [],
        currentExercise: 0,
        navElements: [],
        collection: null,
        animateDuration: 300,
        blockNavigation: false,
        cssClass: {
            ACTIVE_EXERCISE: 'exercise-active'
        },

        initialize: function () {
            this.navElements.push(new NavView({navType: NavView.prototype.navTypes.LEFT, onClick: this.prevExercise.bind(this) }));
            this.navElements.push(new NavView({navType: NavView.prototype.navTypes.RIGHT,  onClick: this.nextExercise.bind(this)}));
        },


        //Selects previous exercise
        prevExercise: function () {
            if (!this.blockNavigation) {
                this.currentExercise--;

                if (this.currentExercise < 0) {
                    this.currentExercise = 0;
                    return;
                }
                this.setActiveExercise(-1);
                this.inactiveExercise();
                this.blockNavigation = true;
            }
        },

        //Selects next exercise
        nextExercise: function () {
            if (!this.blockNavigation) {
                this.currentExercise++;

                if (this.currentExercise > this.exercises.length -1) {
                    this.currentExercise = this.exercises.length - 1;
                    return;
                }
                this.setActiveExercise(1);
                this.blockNavigation = true;
            }
        },

        //Removes active css class from inactive Exercises
        inactiveExercise: function () {
            this.exercises[this.currentExercise].$el.nextAll().removeClass(this.cssClass.ACTIVE_EXERCISE);
        },


        //Returns the offset which is the value by which you have to move the exercises container in navigation bar when you select next or previous exercise
        getShift: function (direction, lineWidth) {
            var positionInWrapper =  lineWidth  - this.$el.find('.nav-button-container').width(),
                wrapperWidth = this.$el.parent().width() - this.$el.find('.nav-button-container').width(),
                shift = 0,
                $prevElement;

            if (direction > 0 && positionInWrapper > wrapperWidth - 2 * this.exercises[this.currentExercise].$el.outerWidth(true)) {

                if (this.exercises[this.currentExercise - 1]) {
                    $prevElement = this.exercises[this.currentExercise - 1].$el;
                    shift =  this.exercises[this.currentExercise].$el.offset().left - $prevElement.offset().left;
                }

            } else if (direction < 0  && this.getCurrentExerciseContainerPosition() < 0) {

                if (this.exercises[this.currentExercise + 1]) {
                    $prevElement = this.exercises[this.currentExercise + 1].$el;
                    shift =  this.exercises[this.currentExercise].$el.offset().left - $prevElement.offset().left;
                }
            }

            return shift;
        },

        //Returns current position of Exercises container
        getCurrentExerciseContainerPosition: function () {
            var currentPosition = parseInt(this.$el.find('.exercises').css('left'), 10);

            if (isNaN(currentPosition)) {
                currentPosition = 0;
            }
            return currentPosition;
        },

        //Moves exercises container by using jQuery animate method
        moveExerciseContainer: function (shift) {
            var newPostion =  this.getCurrentExerciseContainerPosition() - shift;

            this.$el.find('.exercises').stop(true, true).animate({left: newPostion}, {duration: this.animateDuration, complete: function () {
                $(this).css('left', newPostion + 'px');
            }});
        },

        //Moves pointer in navigation bar (CSS3 animations)
        movePointer: function (margin) {
            this.$el.find('.pointer').css('margin-left', margin + 'px');
        },

        //Changes width of line in navigation bar
        expandLine: function (newWidth) {

            var $lineActive = this.$el.find('.line-active'),
                $currentExercise = this.exercises[this.currentExercise].$el;

            this.$el.find('.line-active').stop(true, true).animate({width: newWidth}, {
                duration: this.animateDuration,
                complete: function () {
                    $lineActive.width(newWidth);
                    $currentExercise.addClass(this.cssClass.ACTIVE_EXERCISE);
                    this.blockNavigation = false;
                    this.trigger('changeExercise', this.exercises[this.currentExercise].model);
                }.bind(this),
                step: function (value) {
                    $currentExercise.prevAll().each(function (index, el) {
                        var position = $(el).offset().left -  this.$el.offset().left;
                        if (value > position) {
                            $(el).addClass(this.cssClass.ACTIVE_EXERCISE);
                        }
                    }.bind(this));
                }.bind(this)
            });
        },

        //Sets active exercise by moving Exercise if it is needed, moving pointer, and expanding line
        setActiveExercise: function (direction) {

            var $currentExercise = this.exercises[this.currentExercise].$el,
                width =  $currentExercise.offset().left - this.$el.offset().left,
                shift = this.getShift(direction, width),
                newWidth = width - shift;

            this.trigger('startChangeExercise', this.currentExercise, direction);

            this.moveExerciseContainer(shift);
            this.movePointer(newWidth);
            this.expandLine(newWidth);
        },

        //Adds navigation buttons to navigation bar
        addNavButtons: function () {
            var $navButtonContainer;

            $navButtonContainer = this.$el.find('.nav-button-container');
            _.each(this.navElements, function (view) {
                $navButtonContainer.append(view.render().$el);
            }.bind(this));
        },

        //Adds exercises list
        addExercisesList: function () {
            var tmpList,
                $exercises;

            this.exerciseListView = new ExerciseListView();
            this.$el.append(this.exerciseListView.render().$el);

            $exercises = this.exerciseListView.render().$el.find('.exercises');

            _.each(this.collection, function (data) {
                var exerciseModel = new ExerciseModel(data),
                    view = new ExerciseView({model: exerciseModel});

                $exercises.append(view.render().$el);
                if (data.subexercises.length) {
                    tmpList = new ExerciseListView();
                    view.$el.append(tmpList.render().$el);

                    _.each(data.subexercises, function (data) {
                        var view = new SubExerciseView();
                        data.parent = exerciseModel.toJSON();
                        $exercises.append(view.render().$el);
                        this.exercises.push({ $el: view.$el, model:  new SubExerciseModel(data) });
                    }.bind(this));
                }
            }.bind(this));
        },

        render: function () {
            this.$el.html(this.template());
            this.addNavButtons();
            this.addExercisesList();

            _.defer(function () {
                this.setActiveExercise();
            }.bind(this));

            return this;
        }
    });
    return Footer;

});