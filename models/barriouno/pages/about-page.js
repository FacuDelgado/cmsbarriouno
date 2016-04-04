"use strict";
/*
 * Model for AboutUs Page entity
 */
var keystone = require("keystone");
var Types = keystone.Field.Types;
var sharedDefs = require("../shared-defs");

// initialise the model
var AboutPage = new keystone.List("AboutUs", {
    map: { name: "title" },
    defaultColumns: "code|20%, language|15%, title",
    label: "About Us",
    singular: "About Us"
});

// add fields
AboutPage.add({
    code: {
        type: Types.Text
    },
    title: {
        type: Types.Text,
        required: true,
        default: "About Us"
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
    missionTitle: {
        type: Types.Text,
        label: "Mission - Title"
    },
    missionBody: {
        type: Types.Html,
        wysiwyg: true,
        label: "Mission - Body"
    },
    missionIcon: {
        type: Types.CloudinaryImage,
        label: "Mission - Icon"
    },
    missionIconAlt: {
        type: Types.Text,
        label: "Mission Icon - Alt"
    },
    visionTitle: {
        type: Types.Text,
        label: "Vision - Title"
    },
    visionBody: {
        type: Types.Html,
        wysiwyg: true,
        label: "Vision - Body"
    },
    visionIcon: {
        type: Types.CloudinaryImage,
        label: "Vision - Icon"
    },
    visionIconAlt: {
        type: Types.Text,
        label: "Vision Icon - Alt"
    },
    historyTitle: {
        type: Types.Text,
        label: "History - Title"
    },
    historyBody: {
        type: Types.Html,
        wysiwyg: true,
        label: "History - Body"
    },
    boardOfDirectorsTitle: {
        type: Types.Text,
        label: "Board of Directors - Title"
    },
    images: {
        type: Types.CloudinaryImages
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
AboutPage.schema.pre("save", function (next) {
    this.code = (!this.code) ? this.title.toLowerCase().replace(/\s+/g, "-") : this.code;
    next();
});

// register the model with keystone
AboutPage.register();

/* this module does not export anything */