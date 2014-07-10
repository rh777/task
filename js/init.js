/*global requirejs, require */
requirejs.config({

    baseUrl: './js',
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
    paths: {
        backbone: 'lib/backbone',
        underscore: 'lib/underscore',
        jquery: 'lib/jquery.min'
    }

});

require(['backbone',  'core/viewManager'], function (Backbone, viewManager) {
    viewManager.setViews();
});