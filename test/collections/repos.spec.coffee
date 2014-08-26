# global beforeEach, describe, it, assert, expect
"use strict"

describe 'Repos Collection', ->
  beforeEach ->
    @ReposCollection = new Gitbrowser.Collections.Repos()
