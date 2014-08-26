# global beforeEach, describe, it, assert, expect
"use strict"

describe 'RepoList View', ->
  beforeEach ->
    @RepoListView = new Gitbrowser.Views.RepoList();
