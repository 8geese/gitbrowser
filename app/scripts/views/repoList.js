/*global Gitbrowser, Backbone, JST*/

Gitbrowser.Views = Gitbrowser.Views || {};

(function () {
    'use strict';

    Gitbrowser.Views.Repolist = Backbone.CollectionView.extend({

       // template: JST['app/scripts/templates/repoList.ejs'],

        el : $( "table#repoTable" ),
        selectable : false,
        collection : Gitbrowser.Collections.Repos,
        modelView : Gitbrowser.Views.RepoView,


    });

})();
