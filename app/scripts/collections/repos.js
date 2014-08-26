/*global Gitbrowser, Backbone*/

Gitbrowser.Collections = Gitbrowser.Collections || {};

(function () {
    'use strict';

    Gitbrowser.Collections.Repos = Backbone.Collection.extend({

        model: Gitbrowser.Models.Repo,
        comparator: function(repo) {
            return -repo.get('forks');
        }

    });

})();
