/*global define */
define(function (require) {

    var Backbone = require('backbone'),
        _ = require('underscore'),
        RotatedImageView;

    //Responsible for showing rotated image in ExerciseView
    RotatedImageView = Backbone.View.extend({

        tagName: 'div',
        className: 'rotated-image-container',
        template: _.template('<img src="<%=src%>" alt="" />' +
                             '<label><%=index%></label>'),
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.css({
                '-webkit-transform': 'rotate(' + this.model.get('angle') + 'deg)',
                '-moz-transform': 'rotate(' + this.model.get('angle') + 'deg)'
            });
            return this;
        }
    });

    return RotatedImageView;

});
