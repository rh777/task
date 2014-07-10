/*global define */
define(function (require) {

    var Backbone = require('backbone'),
        _ = require('underscore'),
        NavView;

    //Responsible for showing navigation buttons in navigation bar
    NavView = Backbone.View.extend({

        tagName: 'button',
        className: 'navigation rounded',
        template: _.template(''),
        navType: null,

        events: {
            "click" : "onClick"
        },

        initialize: function (options) {
            this.navType = options.navType || NavView.prototype.navTypes.LEFT;
            this.onClick = options.onClick || this.onClick;
        },

        onClick: function () {
        },

        render: function () {
            this.$el.html(this.template());
            this.$el.addClass('nav-' + this.navType);
            return this;
        }
    });

    NavView.prototype.navTypes = {
        LEFT: 'left',
        RIGHT: 'right'
    };

    return NavView;
});