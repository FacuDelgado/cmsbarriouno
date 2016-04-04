"use strict";
/*
 * Model for Home Page entity
 */
var keystone = require("keystone");
var Types = keystone.Field.Types;
var sharedDefs = require("../shared-defs");

// initialise the model
var HomePage = new keystone.List("Home", {
    map: { name: "title" },
    defaultColumns: "code|20%, language|15%, title",
    label: "Home",
    plural: "Home"
});

// add fields
HomePage.add({
    code: {
        type: Types.Text
    },
    title: {
        type: Types.Text,
        required: true,
        default: "Home"
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
    healthcareTitle: {
        type: Types.Text,
        label: "Healthcare - Title"
    },
    healthcareBody: {
        type: Types.Html,
        wysiwyg: true,
        label: "Healthcare - Body"
    },
    healthcareIcon: {
        type: Types.CloudinaryImage,
        label: "Healthcare - Icon"
    },
    healthcareIconAlt: {
        type: Types.Text,
        label: "Healthcare Icon - Alt"
    },
    educationTitle: {
        type: Types.Text,
        label: "Education - Title"
    },
    educationBody: {
        type: Types.Html,
        wysiwyg: true,
        label: "Education - Body"
    },
    educationIcon: {
        type: Types.CloudinaryImage,
        label: "Education - Icon"
    },
    educationIconAlt: {
        type: Types.Text,
        label: "Education Icon - Alt"
    },
    livelihoodTitle: {
        type: Types.Text,
        label: "Livelihood - Title"
    },
    livelihoodBody: {
        type: Types.Html,
        wysiwyg: true,
        label: "Livelihood - Body"
    },
    livelihoodIcon: {
        type: Types.CloudinaryImage,
        label: "Livelihood - Icon"
    },
    livelihoodIconAlt: {
        type: Types.Text,
        label: "Livelihood Icon - Alt"
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
HomePage.schema.pre("save", function (next) {
    this.code = (!this.code) ? this.title.toLowerCase().replace(/\s+/g, "-") : this.code;
    next();
});

// register the model with keystone
HomePage.register();

/* this module does not export anything */