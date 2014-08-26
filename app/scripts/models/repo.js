/*global Gitbrowser, Backbone*/

Gitbrowser.Models = Gitbrowser.Models || {};

(function () {
    'use strict';

    Gitbrowser.Models.Repo = Backbone.Model.extend({

        url: function () {
            return this.get('url') || ("https://api.github.com/repos/" + (this.get('owner') + '/' + this.get('name')));
        },

        initialize: function () {
        },

        defaults: {
            owner: '7geese'
        },

        parse: function (response, options) {
            return response;
        }

    });

})();
