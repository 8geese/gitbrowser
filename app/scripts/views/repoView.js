/*global Gitbrowser, Backbone, JST, moment*/

Gitbrowser.Views = Gitbrowser.Views || {};

(function () {
    'use strict';

    function transformName(name) {
        function isSafeWord(word) {
            //returns true if word shouldn't be capitalized

            if ($.type(word) !== "string") {
                //well, since we have jquery added anyway
                throw "magically this isn't a string";
            }

            var lower = word.toLowerCase();

            return (lower === 'as' || lower === 'on');
        }

        function capitalizeUnless(word) {
            // capitalizes provided word unless it's safe
            if (isSafeWord(word)) {
                return word;
            }
            else {
               return word.charAt(0).toUpperCase() + word.slice(1);
            }
        }

        function convert(words) {
            // for each word, capitalize unless its one of the safe words
            var capitalized = _.map(words, capitalizeUnless);
            return capitalized.join(' ');
        }

        return convert(name.split("-"));
    }

    var utils = {
        'transformName': transformName,
        'moment': moment
    }

    Gitbrowser.Views.RepoView = Backbone.View.extend({

        template: JST['app/scripts/templates/repoView.ejs'],

        tagName: 'tr',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {

            console.log(this.model);
            console.log(moment());
            this.$el.append(this.template(_.extend(this.model.toJSON(), utils)));
        }

    });

})();
