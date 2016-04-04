"use strict";
/*
 * Model for Programs and Projects Page entity
 */
var keystone = require("keystone");
var Types = keystone.Field.Types;
var sharedDefs = require("../shared-defs");

// initialise the model
var ProgramsAndProjectsPage = new keystone.List("ProgramsAndProjects", {
    map: { name: "title" },
    defaultColumns: "code|20%, language|15%, title",
    label: "Programs and Projects",
    singular: "Programs and Projects"
});

// add fields
ProgramsAndProjectsPage.add({
    code: {
        type: Types.Text
    },
    title: {
        type: Types.Text,
        required: true,
        default: "Programs and Projects"
    },
    heroImage: {
        type: Types.CloudinaryImage
    },
    summaryTitleRow1: {
        type: Types.Text,
        label: "Summary Title - Row 1"
    },
    summaryTitleRow2: {
        type: Types.Text,
        label: "Summary Title - Row 2"
    },
    summaryBody: {
        type: Types.Html,
        wysiwyg: true,
        label: "Summary - Body"
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
ProgramsAndProjectsPage.schema.pre("save", function (next) {
    this.code = (!this.code) ? this.title.toLowerCase().replace(/\s+/g, "-") : this.code;
    next();
});

// register the model with keystone
ProgramsAndProjectsPage.register();

/* this module does not export anything */