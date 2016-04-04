"use strict";
/*
 * Model for Menu entity
 */
var keystone = require("keystone");
var Types = keystone.Field.Types;
var sharedDefs = require("../shared-defs");

// initialise the model
var Menu = new keystone.List("Menu", {
    map: { name: "title" },
    defaultColumns: "language|15%, title",
    label: "Menu"
});

// add fields
Menu.add({
    title: {
        type: Types.Text,
        required: true,
        default: "Menu"
    },
    link1: {
        type: Types.Text
    },
    text1: {
        type: Types.Text
    },
    link2: {
        type: Types.Text
    },
    text2: {
        type: Types.Text
    },
    link3: {
        type: Types.Text
    },
    text3: {
        type: Types.Text
    },
    link4: {
        type: Types.Text
    },
    text4: {
        type: Types.Text
    },
    language: sharedDefs.language
});


// register the model with keystone
Menu.register();

/* this module does not export anything */