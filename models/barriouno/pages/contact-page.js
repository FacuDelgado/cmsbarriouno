"use strict";
/*
 * Model for ContactUs Page entity
 */
var keystone = require("keystone");
var Types = keystone.Field.Types;
var sharedDefs = require("../shared-defs");

// initialise the model
var ContactPage = new keystone.List("ContactUs", {
    map: { name: "title" },
    defaultColumns: "code|20%, language|15%, title",
    label: "Contact Us",
    singular: "Contact Us"
});

// add fields
ContactPage.add({
    code: {
        type: Types.Text
    },
    title: {
        type: Types.Text,
        required: true,
        default: "Contact Us"
    },
    heroImage: {
        type: Types.CloudinaryImage
    },
    donationButton: {
        type: Types.Text
    },
    donationLink: {
        type: Types.Text
    },
    donationText: {
        type: Types.Html,
        wysiwyg: true
    },
    language: sharedDefs.language
});

// hook for code generation
ContactPage.schema.pre("save", function (next) {
    this.code = (!this.code) ? this.title.toLowerCase().replace(/\s+/g, "-") : this.code;
    next();
});

// register the model with keystone
ContactPage.register();

/* this module does not export anything */