"use strict";
/*
 * Model for Project entity
 */
var keystone = require("keystone");
var Types = keystone.Field.Types;
var sharedDefs = require("../shared-defs");

// initialise the model
var Project = new keystone.List("Project", {
    map: { name: "title" },
    defaultColumns: "order|10%, code|20%, language|15%, title"
});

// add fields
Project.add({
    order: {
        type: Types.Number,
        required: true,
        default: 0
    },
    code: {
        type: Types.Text
    },
    title: {
        type: Types.Text,
        required: true
    },
    description: {
        type: Types.Html,
        wysiwyg: true
    },
    approachTitle: {
        type: Types.Text,
        label: "Approach - Title"
    },
    approachBody: {
        type: Types.Html,
        wysiwyg: true,
        label: "Approach - Body"
    },
    firstPanelTitle: {
        type: Types.Text,
        label: "First Panel - Title"
    },
    firstPanelBody: {
        type: Types.Html,
        wysiwyg: true,
        label: "First Panel - Body"
    },
    firstPanelImage: {
        type: Types.CloudinaryImage,
        label: "First Panel - Image"
    },
    firstPanelImageAlignment: {
        type: Types.Select, 
        options: 'left, right', 
        default: 'right',
        label: "First Panel - Image Alignment"
    },
    firstPanelImageWidth: {
        type: Types.Select, 
        options: 'small, medium, large', 
        default: 'medium',
        label: "First Panel - Image Width"
    },
    secondPanelTitle: {
        type: Types.Text,
        label: "Second Panel - Title"
    },
    secondPanelBody: {
        type: Types.Html,
        wysiwyg: true,
        label: "Second Panel - Body"
    },
    secondPanelImage: {
        type: Types.CloudinaryImage,
        label: "Second Panel - Image"
    },
    secondPanelImageAlignment: {
        type: Types.Select, 
        options: 'left, right', 
        default: 'right',
        label: "Second Panel - Image Alignment"
    },
    secondPanelImageWidth: {
        type: Types.Select, 
        options: 'small, medium, large', 
        default: 'medium',
        label: "Second Panel - Image Width"
    },
    thirdPanelTitle: {
        type: Types.Text,
        label: "Third Panel - Title"
    },
    thirdPanelBody: {
        type: Types.Html,
        wysiwyg: true,
        label: "Third Panel - Body"
    },
    thirdPanelImage: {
        type: Types.CloudinaryImage,
        label: "Third Panel - Image"
    },
    thirdPanelImageAlignment: {
        type: Types.Select, 
        options: 'left, right', 
        default: 'right',
        label: "Third Panel - Image Alignment"
    },
    thirdPanelImageWidth: {
        type: Types.Select, 
        options: 'small, medium, large', 
        default: 'medium',
        label: "Third Panel - Image Width"
    },
    fourthPanelTitle: {
        type: Types.Text,
        label: "Fourth Panel - Title"
    },
    fourthPanelBody: {
        type: Types.Html,
        wysiwyg: true,
        label: "Fourth Panel - Body"
    },
    fourthPanelImage: {
        type: Types.CloudinaryImage,
        label: "Fourth Panel - Image"
    },
    fourthPanelImageAlignment: {
        type: Types.Select, 
        options: 'left, right', 
        default: 'right',
        label: "Fourth Panel - Image Alignment"
    },
    fourthPanelImageWidth: {
        type: Types.Select, 
        options: 'small, medium, large', 
        default: 'medium',
        label: "Fourth Panel - Image Width"
    },
    started: {
        type: Types.Boolean
    },
    icon: {
        type: Types.CloudinaryImage
    },
    iconAlt: {
        type: Types.Text,
        label: "Icon - Alt"
    },
    images: {
        type: Types.CloudinaryImages
    },
    language: sharedDefs.language
});

// hook for code generation
Project.schema.pre("save", function (next) {
    this.code = (!this.code) ? this.title.toLowerCase().replace(/\s+/g, "-") : this.code;
    next();
});

// register the model with keystone
Project.register();

/* this module does not export anything */