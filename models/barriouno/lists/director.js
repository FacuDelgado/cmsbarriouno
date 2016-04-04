"use strict";
/*
 * Model for Director entity
 */
var keystone = require("keystone");
var Types = keystone.Field.Types;
var sharedDefs = require("../shared-defs");

// initialise the model
var Director = new keystone.List("Director", {
    map: { name: "fullName" },
    defaultColumns: "order|10%, code|20%, language|15%, fullName"
});

// add fields
Director.add({
    order: {
        type: Types.Number,
        required: true,
        default: 0
    },
    code: {
        type: Types.Text
    },
    fullName: {
        type: Types.Text,
        required: true
    },
    summary: {
        type: Types.Html,
        wysiwyg: true
    },
    image: {
        type: Types.CloudinaryImage
    },
    imageAlt: {
        type: Types.Text,
        label: "Image - Alt"
    },
    language: sharedDefs.language
});



// hook for code generation
Director.schema.pre("save", function (next) {
    this.code = (!this.code) ? this.fullName.toLowerCase().replace(/\s+/g, "-") : this.code;
    next();
});

// register the model with keystone
Director.register();

/* this module does not export anything */