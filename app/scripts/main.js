/*global Gitbrowser, $*/


window.Gitbrowser = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

window.App = {};


$(document).ready(function () {
    'use strict';
    Gitbrowser.init();
    window.App.org = new Gitbrowser.Models.Org({
        name: '7geese'
    });
    window.App.org.fetch();

    window.App.repoListView = new Gitbrowser.Views.Repolist({
        el : $( "table#repoTable" ),
        collection: window.App.org.ownedRepos(),
        modelView : Gitbrowser.Views.RepoView
    });

    window.App.repoListView.render()

});
