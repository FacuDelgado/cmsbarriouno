"use strict";
/*
 * Model for Header entity
 */
var keystone = require("keystone");
var Types = keystone.Field.Types;
var sharedDefs = require("../shared-defs");

// initialise the model
var Header = new keystone.List("Header", {
    map: { name: "title" },
    defaultColumns: "language|15%, title",
    label: "Header"
});

// add fields
Header.add({
    title: {
        type: Types.Text,
        required: true,
        default: "Header"
    },
    share: {
        type: Types.Text
    },
    link1: {
        type: Types.Text
    },
    text1: {
        type: Types.Text
    },
    image1: {
        type: Types.CloudinaryImage
    },
    image1Alt: {
        type: Types.Text,
        label: "Image 1 - Alt"
    },
    link2: {
        type: Types.Text
    },
    text2: {
        type: Types.Text
    },
    image2: {
        type: Types.CloudinaryImage
    },
    image2Alt: {
        type: Types.Text,
        label: "Image 2 - Alt"
    },
    link3: {
        type: Types.Text
    },
    text3: {
        type: Types.Text
    },
    image3: {
        type: Types.CloudinaryImage
    },
    image3Alt: {
        type: Types.Text,
        label: "Image 3 - Alt"
    },
    logo: {
        type: Types.CloudinaryImage
    },
    logoAlt: {
        type: Types.Text,
        label: "Logo - Alt"
    },
    donationButton: {
        type: Types.Text
    },
    donationLink: {
        type: Types.Text
    },
    language: sharedDefs.language
});


// register the model with keystone
Header.register();

/* this module does not export anything */