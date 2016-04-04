"use strict";
/*
 * Model for ContactForm entity
 */
var keystone = require("keystone");
var Types = keystone.Field.Types;
var sharedDefs = require("../shared-defs");

// initialise the model
var ContactForm = new keystone.List("ContactForm", {
    map: { name: "title" },
    defaultColumns: "language|15%, title",
    label: "Contact Form",
    plural: "Contact Form"
});

// add fields
ContactForm.add({
    title: {
        type: Types.Text,
        required: true,
        default: "Contact Form"
    },
    description: {
        type: Types.Html,
        wysiwyg: true
    },
    formName: {
        type: Types.Text,
        label: "Form - Name"
    },
    formMail: {
        type: Types.Text,
        label: "Form - Mail"
    },
    formMessage: {
        type: Types.Text,
        label: "Form - Message"
    },
    formSubmit: {
        type: Types.Text,
        label: "Form - Submit"
    },
    formErrorMessage: {
        type: Types.Text,
        label: "Form - Error Message"
    },
    formSucessMessage: {
        type: Types.Text,
        label: "Form - Sucess Message"
    },
    formValidationMessage: {
        type: Types.Text,
        label: "Form - Validation Message"
    },
    mapTitle: {
        type: Types.Text,
        label: "Map - Title"
    },
    mapDescription: {
        type: Types.Html,
        wysiwyg: true,
        label: "Map - Description"
    },
    mapLatitude: {
        type: Types.Text,
        label: "Map - Latitude"
    },
    mapLongitude: {
        type: Types.Text,
        label: "Map - Longitude"
    },
    language: sharedDefs.language
});


// register the model with keystone
ContactForm.register();

/* this module does not export anything */