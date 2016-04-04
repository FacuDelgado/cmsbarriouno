"use strict";
/*
 * Web server main application - enable Keystone, no local views
 */

// requires
var express = require("express");
var mongoose = require("mongoose");
var keystone = require("keystone");
var path = require("path");

try {
    require("dotenv").load();
}
finally { }

// set mongoose manually
keystone.set("mongoose", mongoose);

// prepare app
var app = express();
keystone.set("app", app);

// get current target 
var target = process.env.TARGET;
if (!target) {
    console.log("Missing target env setting");
    process.exit(-1);
}

// get connection string
var dbUri = process.env[target + "_URI"];
if (!dbUri) {
    console.log("Missing URI for target '" + target + "'");
    process.exit(-1);
}

/**
 * Keystone initialisation
 */

keystone.init({
    
    "name": "Keystone CMS",
    "brand": process.env.BRAND_NAME || "CMS",
    "less": "public",
    
    "views": "views",
    
    "auto update": false,
    "mongo": dbUri,
    
    "session": true,
    "auth": true,
    "user model": "User",
    "cookie secret": process.env.COOKIE_SECRET || "demo"
    
    //"ga property": process.env.GA_PROPERTY,
    //"ga domain": process.env.GA_DOMAIN,
    
    //"chartbeat property": process.env.CHARTBEAT_PROPERTY,
    //"chartbeat domain": process.env.CHARTBEAT_DOMAIN
});


// initialise models for the current target
require("./models/" + target);

// set app locals
keystone.set("locals", {

    // properties for keystone
    _: require("underscore"),
    env: keystone.get("env"),
    utils: keystone.utils,
    editable: keystone.content.editable
});

// set navigation structure
keystone.set("nav", {
    "Listado de socios": ["Socio"],
    "Usarios": ["User"]
});

// redirect root to /keystone
app.all("/", function (req, res) { res.redirect("/keystone"); });

// start server and listen
keystone.start();