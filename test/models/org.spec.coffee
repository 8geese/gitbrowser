# global beforeEach, describe, it, assert, expect
"use strict"

describe 'Org Model', ->
  beforeEach ->
    @OrgModel = new Gitbrowser.Models.Org();
