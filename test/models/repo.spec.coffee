# global beforeEach, describe, it, assert, expect
"use strict"

describe 'Repo Model', ->
  beforeEach ->
    @RepoModel = new Gitbrowser.Models.Repo();
