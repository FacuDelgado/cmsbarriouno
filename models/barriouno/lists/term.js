"use strict";
/*
 * Model for Term entity
 */
var keystone = require("keystone");
var Types = keystone.Field.Types;
var sharedDefs = require("../shared-defs");

// initialise the model
var Term = new keystone.List("Term", {
    map: { name: "code" },
    defaultColumns: "code|20%, language|15%, value"
});

// add fields
Term.add({
    code: {
        type: Types.Text
    },
    value: {
        type: Types.Text
    },
    language: sharedDefs.language
});

// register the model with keystone
Term.register();