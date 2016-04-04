﻿"use strict";
/*
 * Model for Language entity
 */
var keystone = require("keystone");
var Types = keystone.Field.Types;

// initialise the model
var Language = new keystone.List("Language", {
    map: { name: "code" },
    defaultColumns: "code",
    label: "Language"
});

// add fields
Language.add({
    code: {
        type: Types.Text
    },
    description: {
        type: Types.Text
    }
});

// register the model with keystone
Language.register();