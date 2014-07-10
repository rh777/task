/*global define */
define(function (require) {

    var BasicInputView = require('views/exercise/views/BasicInputView'),
        _ = require('underscore'),
        InputView;

    //Responsible for showing inputs in ExerciseView
    InputView = BasicInputView.extend({
        tagName: 'div',
        className: 'input-container',
        template: _.template('<input <%=(example ? \'disabled\' : \'\')%> type="text"  value="<%=example ? example : value%>" /><label><%=label%></label>'),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return InputView;

});
