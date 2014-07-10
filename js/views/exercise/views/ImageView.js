/*global define */
define(function(require) {

    var BasicInputView = require('views/exercise/views/BasicInputView'),
        _ = require('underscore'),
        ImageView;

    //Responsible for showing special containers contains images and inputs in ExerciseView
    ImageView = BasicInputView.extend({
        tagName: 'div',
        className: 'image-container',
        template: _.template('<img src="<%=src%>" />' +
                             '<div class="<%=(example?\'example\':\'task\') %>"><%=(example?\'<span>Example:</span>\':\'\') %>' +
                                '<label><%=index%></label>' +
                                '<input <%=(example ? \'disabled\' : \'\')%> type="text" value="<%=example ? example : value%>" />' +
                             '</div>'
                            ),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return ImageView;
});
