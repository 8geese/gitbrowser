/*global Gitbrowser, Backbone*/

Gitbrowser.Models = Gitbrowser.Models || {};

(function () {
    'use strict';

    Gitbrowser.Models.Org = Backbone.Model.extend({

        urlRoot: 'https://api.github.com/orgs/',

        ownedRepos: function() {
            var repos = new Gitbrowser.Collections.Repos;
            repos.url = this.url() + "/repos";

            // this seems to be the least insane way (code-wise) to force a sort.
            repos.fetch({
                reset: true
            });

            return repos
        },

        initialize: function() {
        },

        defaults: {
            id: '7geese'
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        },
        idAttribute: 'name'
    });

})();
